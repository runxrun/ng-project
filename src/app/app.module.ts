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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterlinkRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
