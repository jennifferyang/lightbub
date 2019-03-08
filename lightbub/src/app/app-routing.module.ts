import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'badges', loadChildren: './badges/badges.module#BadgesPageModule' },
  { path: 'energy', loadChildren: './energy/energy.module#EnergyPageModule' },
  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
