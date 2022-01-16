import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl',
})
export class HiddenDirective {
  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  /*  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    console.log(event);
    this.visibility = 'hidden';
  }*/
  constructor() {}

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
