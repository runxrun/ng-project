import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNoAuthComponent } from './templates/header-no-auth/header-no-auth.component';
import { FooterNoAuthComponent } from './templates/footer-no-auth/footer-no-auth.component';
import { LoginNoAuthComponent } from './templates/login-no-auth/login-no-auth.component';
import { SidebarNoAuthComponent } from './templates/sidebar-no-auth/sidebar-no-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { RouterlinkRoutingModule } from './routerlink/routerlink-routing.module';
import { ContractComponent } from './pages/contract/contract.component';
import { MultiLanguagesComponent } from './templates/multi-languages/multi-languages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TtkCalendarComponent } from './components/ttk-calendar/ttk-calendar.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';
import { CarouselCdkComponent } from './components/carousel-cdk/carousel-cdk.component';
import { CarouselModule } from 'ng-carousel-cdk';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNoAuthComponent,
    FooterNoAuthComponent,
    LoginNoAuthComponent,
    SidebarNoAuthComponent,
    HomeComponent,
    SupportComponent,
    PagenotfoundComponent,
    ContractComponent,
    MultiLanguagesComponent,
    TtkCalendarComponent,
    SearchHotelsComponent,
    CarouselCdkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterlinkRoutingModule,
    NgbModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
