import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesListPage } from './profiles-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesListPageRoutingModule {}
