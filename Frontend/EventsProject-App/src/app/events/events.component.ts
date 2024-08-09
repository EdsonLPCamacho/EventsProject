import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [CommonModule]
})
export class EventsComponent implements OnInit {
  public events: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.http.get<any[]>('http://localhost:5195/api/event').subscribe({
      next: (response) => {
        this.events = response;
        console.log('Events:', this.events);  // Debug log to check if data is received
      },
      error: (err) => console.error('Error fetching events:', err),
      complete: () => console.log('Request complete')
    });
  }
}
