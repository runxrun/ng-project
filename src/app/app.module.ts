import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderNoAuthComponent } from './templates/header-no-auth/header-no-auth.component';
import { FooterNoAuthComponent } from './templates/footer-no-auth/footer-no-auth.component';
import { LoginNoAuthComponent } from './templates/login-no-auth/login-no-auth.component';
import { SidebarNoAuthComponent } from './templates/sidebar-no-auth/sidebar-no-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help-support', component: SupportComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

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
    RouterModule.forRoot(
      appRoutes, {
        scrollPositionRestoration: 'enabled',
        enableTracing: false,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
