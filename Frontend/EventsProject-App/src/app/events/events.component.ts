import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EventsComponent implements OnInit {
  public events: any[] = []; // Stores the currently displayed events
  private allEvents: any[] = []; // Stores all events fetched from the API
  public searchTerm: string = ''; // Stores the current search term

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEvents(); // Fetch events when the component initializes
  }

  // Fetch events from the API and store them
  public getEvents(): void {
    this.http.get<any[]>('http://localhost:5195/api/event').subscribe({
      next: (response) => {
        this.allEvents = response; // Store all fetched events
        this.events = [...this.allEvents]; // Initialize events with all fetched events
        console.log('Events:', this.events); // Log the events to verify
      },
      error: (err) => console.error('Error fetching events:', err), // Handle errors
    });
  }

  // Filter events based on the search term
  public filterEvents(): void {
    const searchTermLower = this.searchTerm.toLowerCase(); // Convert search term to lower case
    console.log('Search Term:', searchTermLower); // Log the search term for debugging

    // Filter events based on the search term, I changed the filteredEvents to event
    this.events = this.allEvents.filter(event =>
      event.theme.toLowerCase().includes(searchTermLower) ||
      (event.local && event.local.toLowerCase().includes(searchTermLower)) ||
      (event.eventTime && event.eventTime.toLowerCase().includes(searchTermLower))
    );

    console.log('Filtered Events:', this.events); // Log filtered events for debugging
  }
}
