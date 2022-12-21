import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TtkRoutingModule } from './ttk-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TtkRoutingModule
  ]
})
export class TtkModule { }
