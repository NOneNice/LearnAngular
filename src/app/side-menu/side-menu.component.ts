import {
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
export class SideMenuComponent implements OnInit {
  @Output()
  public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(
    true
  );

  @ViewChild('drawer', { static: true })
  public sideMenu!: MatDrawer;

  @ViewChild('ContentBlock', { read: ViewContainerRef, static: true })
  public block: ViewContainerRef;

  @ContentChild('ContentTemplate', { static: true })
  public contentEl: TemplateRef<any>;

  ngOnInit(): void {
    this.block.createEmbeddedView(this.contentEl);
    this.setSideNavControl.emit(this.sideMenu);
  }
}
