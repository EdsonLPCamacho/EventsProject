import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { EventsComponent } from './app/events/events.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'events', component: EventsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Fornece HttpClient
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
