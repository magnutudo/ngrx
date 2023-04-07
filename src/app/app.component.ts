import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset} from "./reducers/counter";
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  updatedAt?: number
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))

  constructor(public store: Store) {
  }

  increase(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(increase())
  }

  decrease(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(decrease())
  }

  reset(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(reset())
  }
}
