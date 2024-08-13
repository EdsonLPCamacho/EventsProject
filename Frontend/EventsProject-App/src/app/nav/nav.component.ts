import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importa CollapseModule diretamente

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CollapseModule] // Importa diretamente o CollapseModule
})
export class NavComponent implements OnInit {
  
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}
}
