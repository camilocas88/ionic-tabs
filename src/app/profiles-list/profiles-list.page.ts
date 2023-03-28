import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/models';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.page.html',
  styleUrls: ['./profiles-list.page.scss'],
})
export class ProfilesListPage implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  private profileSubscription!: Subscription;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileSubscription = this.profileService.profiles$.subscribe(
      (profiles) => {
        this.profiles = profiles;
      }
    );
  }

  ngOnDestroy() {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
}
