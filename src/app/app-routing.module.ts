import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'campaigntype', loadChildren: () => import('./campaigntype/campaigntype.module').then(m => m.CampaigntypeModule) },
  { path: 'arfile-upload', loadChildren: () => import('./arfile-upload/arfile-upload.module').then(m => m.ArfileUploadModule) },
  { path: 'create-campaign', loadChildren: () => import('./create-campaign/create-campaign.module').then(m => m.CreateCampaignModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
