import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Importa a configuração do app

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers 
  ]
})
.catch(err => console.error(err));
