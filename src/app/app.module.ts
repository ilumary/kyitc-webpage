import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VisionComponent } from './pagecomponents/vision/vision.component';
import { StarterpageComponent } from './pagecomponents/starterpage/starterpage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CoachingComponent } from './pages/coaching/coaching.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PreFooterComponent } from './shared/pre-footer/pre-footer.component';
import { TestamonialsComponent } from './pagecomponents/testamonials/testamonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VisionComponent,
    StarterpageComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CoachingComponent,
    AppointmentsComponent,
    ImpressumComponent,
    FaqComponent,
    PreFooterComponent,
    TestamonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
