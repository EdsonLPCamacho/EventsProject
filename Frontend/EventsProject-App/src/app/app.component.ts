import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component'; 
import { SpeakerComponent } from './speaker/speaker.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, EventsComponent, SpeakerComponent] 
})
export class AppComponent {
  title = 'My Angular App';
}
