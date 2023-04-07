import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, reset, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))
  updatedAt$ = this.store.select(updatedAtSelector)
  constructor(public store: Store) {
  }

  increase(): void {

    this.store.dispatch(increase())
  }

  decrease(): void {
    this.store.dispatch(decrease())
  }

  reset(): void {
    this.store.dispatch(reset())
  }
}
