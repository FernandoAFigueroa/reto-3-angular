import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularComponent } from './popular/popular.component';
import { DownloadedComponent } from './downloaded/downloaded.component';
import { AddComponent } from './add/add.component';
import { SessionGuard } from '../guards/sessionGuard/session.guard';

const routesChildren: Routes = [
  { path: 'popular', component: PopularComponent, canActivate: [SessionGuard] },
  {
    path: 'upcoming',
    component: UpcomingComponent,
    canActivate: [SessionGuard],
  },
  {
    path: 'downloaded',
    component: DownloadedComponent,
    canActivate: [SessionGuard],
  },
  { path: 'add', component: AddComponent, canActivate: [SessionGuard] },
  { path: '**', redirectTo: 'popular', pathMatch: 'full' },
];
const routes: Routes = [
  { path: 'home', component: HomeComponent, children: routesChildren },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
