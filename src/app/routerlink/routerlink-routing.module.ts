import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';
import { SupportComponent } from '../pages/support/support.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'help-support', component: SupportComponent },
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

