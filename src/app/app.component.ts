import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Ng Course';
  public MyDrawer!: MatDrawer;
  public products$: Observable<IProduct[]> = products$;
  public searchText = '';
  public onlyFavorites = false;

  setSideNav(drawer: MatDrawer) {
    this.MyDrawer = drawer;
  }
  ngOnInit() {}

  public search(text: string) {
    this.searchText = text;
  }

  public toggleOnlyFavorites(event: MatCheckboxChange) {
    this.onlyFavorites = event.checked;
  }
}
