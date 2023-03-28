import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailPage } from '../profile-detail/profile-detail.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profiles-list',
        loadChildren: () =>
          import('../profiles-list/profiles-list.module').then(
            (m) => m.ProfilesListPageModule
          ),
      },
      {
        path: 'profile-form',
        loadChildren: () =>
          import('../profile-form/profile-form.module').then(
            (m) => m.ProfileFormPageModule
          ),
      },
      {
        path: 'profile-detail',
        component: ProfileDetailPage,
      },
      {
        path: '',
        redirectTo: '/tabs/profiles-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/profiles-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
