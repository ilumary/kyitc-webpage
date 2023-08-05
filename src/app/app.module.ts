import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
