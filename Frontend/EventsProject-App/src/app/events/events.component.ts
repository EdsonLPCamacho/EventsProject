import { CommonModule } from '@angular/common';
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

  constructor() {}

  ngOnInit(): void {
  
  }

  public getEvents(): void{
    this.events=[{Theme: 'C#'}, {Theme: '.NET'}, {Theme:'Angular'}];
  }


}
