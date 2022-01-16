import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
})
export class ExchangeRateComponent implements OnInit {
  public rates: { value: number; currency: string }[] = [
    { value: 10, currency: 'USD' },
    { value: 12, currency: 'EUR' },
    { value: 50, currency: 'RUB' },
  ];

  public mode: 'off' | 'on' = 'on';
  public ms = 4000;

  ngOnInit(): void {}
}
