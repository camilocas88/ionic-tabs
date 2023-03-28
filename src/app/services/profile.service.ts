import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Profile } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilesSubject = new BehaviorSubject<Profile[]>([]);
  profiles$ = this.profilesSubject.asObservable();
  constructor() {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      const parsedProfiles: Profile[] = JSON.parse(storedProfiles);
      this.profilesSubject.next(parsedProfiles);
    }
  }

  addProfile(profile: Profile): boolean {
    const profiles = this.profilesSubject.getValue();

    // Check for duplicate phone numbers
    const duplicate = profiles.find(
      (p) => p.phoneNumber === profile.phoneNumber
    );
    if (duplicate) {
      return false;
    }

    profiles.push(profile);
    this.profilesSubject.next(profiles);

    // Save profiles to localStorage
    const serializedProfiles = JSON.stringify(profiles);
    localStorage.setItem('profiles', serializedProfiles);
    return true;
  }
}
