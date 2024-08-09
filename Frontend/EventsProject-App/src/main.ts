import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { EventsComponent } from './app/events/events.component';
import { appConfig } from './app/app.config'; // Importa a configuração do app

const routes = [
  { path: '', component: AppComponent },
  { path: 'events', component: EventsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...appConfig.providers 
  ]
})
  .catch(err => console.error(err));
