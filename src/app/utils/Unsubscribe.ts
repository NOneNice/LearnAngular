import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class UnSubscribe implements OnDestroy {
  public sub: Subscription[] = [];

  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
  }
}
