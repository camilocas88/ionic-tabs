import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesListPageRoutingModule } from './profiles-list-routing.module';

import { ProfilesListPage } from './profiles-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesListPageRoutingModule
  ],
  declarations: [ProfilesListPage]
})
export class ProfilesListPageModule {}
