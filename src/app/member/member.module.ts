import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MyBookingsComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }