import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from "./events/events.component";
import { SpeakerComponent } from "./speaker/speaker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    EventsComponent,
    SpeakerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventsProject-App';
}
