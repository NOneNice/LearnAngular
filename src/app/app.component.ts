import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { UnSubscribe } from './utils/Unsubscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends UnSubscribe implements OnInit, OnDestroy {
  public title = 'Ng Course';
  public MyDrawer!: MatDrawer;
  public product!: IProduct[];

  setSideNav(drawer: MatDrawer) {
    this.MyDrawer = drawer;
  }
  ngOnInit() {
    const sub1 = products$.subscribe((p) => {
      this.product = p;
    });
    this.sub.push(sub1);
  }
}
