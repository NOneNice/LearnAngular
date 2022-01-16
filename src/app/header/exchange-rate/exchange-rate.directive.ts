import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appExchangeRate]',
})
export class ExchangeRateDirective implements OnInit {
  @Input('appExchangeRateFrom')
  public rates: { value: number; currency: string }[];
  @Input('appExchangeRateInterval')
  public ms: number = 1000;

  @Input('appExchangeRateAutoplay')
  public set playAuto(mode: 'off' | 'on') {
    if (!mode) {
      return;
    }
    this.autoPlay = mode;
  }

  public autoPlay = 'on';
  public context: any;
  private index = 0;
  private intervalId: number | null = null;

  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
  }

  public next() {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }

    this.context.$implicit = this.rates[this.index];
  }

  public prev() {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval() {
    if (this.autoPlay != 'on') {
      return;
    }
    this.clearInterval().initInterval();
  }

  private initInterval(): this {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.ms);
    return this;
  }
  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }
}
