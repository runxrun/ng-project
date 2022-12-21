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
import { ResultHotelComponent } from './pages/hotel/result-hotel/result-hotel.component';
import { DescriptionHotelComponent } from './pages/hotel/description-hotel/description-hotel.component';
import { HotelImagesGalleryComponent } from './components/hotel-images-gallery/hotel-images-gallery.component';
import { HotelRatesComponent } from './components/hotel-rates/hotel-rates.component';
import { PaxDetailComponent } from './pages/pax-detail/pax-detail.component';
import { BookingdetailComponent } from './components/bookingdetail/bookingdetail.component';
import { PromocodeComponent } from './components/promocode/promocode.component';
import { AggregateComponent } from './components/aggregate/aggregate.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DropdownClickInsideDirective } from './directive/dropdown-click-inside.directive';
import { TtkGuestinroomComponent } from './components/ttk-guestinroom/ttk-guestinroom.component';
import { TtkAutocompleteDestinationComponent } from './components/ttk-autocomplete-destination/ttk-autocomplete-destination.component';
import { TtkRecommendedDestinationComponent } from './components/ttk-recommended-destination/ttk-recommended-destination.component';
import { TtkSortingHotelComponent } from './components/ttk-sorting-hotel/ttk-sorting-hotel.component';
import { TtkFilterHotelComponent } from './components/ttk-filter-hotel/ttk-filter-hotel.component';
import { TtkMapHotelComponent } from './components/ttk-map-hotel/ttk-map-hotel.component';
import { HotelPaxdetailComponent } from './components/paxdetail/hotel-paxdetail/hotel-paxdetail.component';
import { EnhancementComponent } from './components/paxdetail/hotel-paxdetail/components/enhancement/enhancement.component';
import { FlightDetailComponent } from './components/paxdetail/hotel-paxdetail/components/flight-detail/flight-detail.component';
import { SpecialRequestComponent } from './components/paxdetail/hotel-paxdetail/components/special-request/special-request.component';
import { GuestInRoomComponent } from './components/paxdetail/hotel-paxdetail/components/guest-in-room/guest-in-room.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { PipeModule } from './pipe/pipe.module';
import { TtkSignupComponent } from './components/ttk-signup/ttk-signup.component';

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
    ForgotPasswordComponent,
    ContractComponent,
    MultiLanguagesComponent,
    TtkCalendarComponent,
    SearchHotelsComponent,
    CarouselCdkComponent,
    ResultHotelComponent,
    DescriptionHotelComponent,
    HotelImagesGalleryComponent,
    HotelRatesComponent,
    PaxDetailComponent,
    BookingdetailComponent,
    PromocodeComponent,
    AggregateComponent,
    DropdownClickInsideDirective,
    TtkGuestinroomComponent,
    TtkAutocompleteDestinationComponent,
    TtkRecommendedDestinationComponent,
    TtkSortingHotelComponent,
    TtkFilterHotelComponent,
    TtkMapHotelComponent,
    HotelPaxdetailComponent,
    EnhancementComponent,
    FlightDetailComponent,
    SpecialRequestComponent,
    GuestInRoomComponent,
    SignupComponent,
    TtkSignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterlinkRoutingModule,
    NgbModule,
    CarouselModule,
    AutocompleteLibModule,
    LightgalleryModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
