import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/models';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  profile!: Profile
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params && params['profile']) {
        this.profile = JSON.parse(params['profile']);
        console.log('this.profile', this.profile)
      }
    });
  }
}
