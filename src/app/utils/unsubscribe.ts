import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class UnSubscribe implements OnDestroy {
  public unSubscrible$ = new Subject();

  public ngOnDestroy() {
    this.unSubscrible$.next();
    this.unSubscrible$.complete();
  }

  /*  public sub: Subscription[] = [];

  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
  }*/
}
