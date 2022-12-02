import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { DownloadedComponent } from './downloaded/downloaded.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { AddComponent } from './add/add.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    PopularComponent,
    DownloadedComponent,
    UpcomingComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
