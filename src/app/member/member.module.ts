import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemberLinksComponent } from './components/member-links/member-links.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { BookingDetailComponent } from './pages/booking-detail/booking-detail.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MyBookingsComponent,
    DashboardComponent,
    MemberLinksComponent,
    ChangePasswordComponent,
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
