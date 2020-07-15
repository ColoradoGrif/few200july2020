import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectCurrentCount, selectResetDisabled, selectCountingBy } from '../../reducers';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  countingBy$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.current$ = this.store.pipe(
      select(selectCurrentCount)
    );
    this.resetDisabled$ = this.store.pipe(
      select(selectResetDisabled)
    );

    this.countingBy$ = this.store.pipe(
      select(selectCountingBy)
    );
  }

  increment(): void {
    this.store.dispatch(actions.countIncremented());
  }

  decrement(): void {
    this.store.dispatch(actions.countDecremented());
  }

  reset(): void {
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number): void {
    this.store.dispatch(actions.countBySet({ by }));
  }
}
