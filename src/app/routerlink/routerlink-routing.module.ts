import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from '../pages/contract/contract.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { HomeComponent } from '../pages/home/home.component';
import { DescriptionHotelComponent } from '../pages/hotel/description-hotel/description-hotel.component';
import { ResultHotelComponent } from '../pages/hotel/result-hotel/result-hotel.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';
import { PaxDetailComponent } from '../pages/pax-detail/pax-detail.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { SupportComponent } from '../pages/support/support.component';

const appRoutes: Routes = [
  { path: 'hotel/result', component: ResultHotelComponent },
  { path: 'hotel/description', component: DescriptionHotelComponent },
  { path: 'paxdetail', component: PaxDetailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'help-support', component: SupportComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ttk', loadChildren: () => import('../ttk/ttk.module').then(m => m.TtkModule) },
  { path: 'member', loadChildren: () => import('../member/member.module').then(m => m.MemberModule) },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{
    scrollPositionRestoration: 'enabled',
    enableTracing: false,
  })],
  exports: [RouterModule]
})
export class RouterlinkRoutingModule { }

