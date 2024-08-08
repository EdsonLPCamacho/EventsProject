import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],

  
})
export class EventsComponent implements OnInit {
  public events: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.http.get<any[]>('https://localhost:5001/api/event').subscribe({
      next: (response) => this.events = response,
      error: (err) => console.error(err),
      complete: () => console.log('Request complete')
    });
  }
}
