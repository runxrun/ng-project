import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from '../pages/contract/contract.component';
import { HomeComponent } from '../pages/home/home.component';
import { DescriptionHotelComponent } from '../pages/hotel/description-hotel/description-hotel.component';
import { ResultHotelComponent } from '../pages/hotel/result-hotel/result-hotel.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';
import { PaxDetailComponent } from '../pages/pax-detail/pax-detail.component';
import { SupportComponent } from '../pages/support/support.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'hotel/result', component: ResultHotelComponent, pathMatch: 'full' },
  { path: 'hotel/description', component: DescriptionHotelComponent, pathMatch: 'full' },
  { path: 'paxdetail', component: PaxDetailComponent, pathMatch: 'full' },
  { path: 'contract', component: ContractComponent, pathMatch: 'full' },
  { path: 'help-support', component: SupportComponent, pathMatch: 'full' },
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

