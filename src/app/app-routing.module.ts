import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile-form',
    loadChildren: () => import('./profile-form/profile-form.module').then( m => m.ProfileFormPageModule)
  },
  {
    path: 'profiles-list',
    loadChildren: () => import('./profiles-list/profiles-list.module').then( m => m.ProfilesListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
