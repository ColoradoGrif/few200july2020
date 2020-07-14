import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.current$ = this.store.pipe(
      select(state => state.counter.current)
    );
  }

  increment(): void {
    this.store.dispatch({ type: 'Increment' });
  }

  decrement(): void {
    this.store.dispatch({ type: 'Decrement' });
  }
}
