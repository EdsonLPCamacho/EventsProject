import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component'; // Ajuste o caminho conforme necessário
import { SpeakerComponent } from './speaker/speaker.component'; // Corrija o caminho conforme necessário

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, EventsComponent, SpeakerComponent] // Inclua SpeakerComponent aqui
})
export class AppComponent {
  title = 'My Angular App';
}
