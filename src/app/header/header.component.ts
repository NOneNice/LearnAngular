import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input()
  public title: string;

  public someClass = 'someClass Value';
  public condition = true;

  @Input()
  public drawer!: MatDrawer;

  constructor() {}
}
