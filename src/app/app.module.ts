import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRateDirective } from './header/exchange-rate/exchange-rate.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideMenuComponent, ProductCardComponent, ProductsFilterPipe, ExchangeRateComponent, ExchangeRateDirective],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
