import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoachingComponent } from './pages/coaching/coaching.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'termine', component: AppointmentsComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
