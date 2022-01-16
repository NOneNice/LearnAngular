import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Output()
  public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(
    true
  );

  @ViewChild('drawer')
  public sideMenu!: MatDrawer;

  @ViewChild('ContentBlock', { read: ViewContainerRef })
  public block!: ViewContainerRef;

  @ContentChild('ContentTemplate')
  public contentEl!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.block.createEmbeddedView(this.contentEl);
    this.setSideNavControl.emit(this.sideMenu);
  }

  ngAfterContentInit(): void {
    console.log(this.contentEl);
  }
}
