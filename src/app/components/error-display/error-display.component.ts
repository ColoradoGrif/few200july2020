import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, selectHasError, selectErrorMessage } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { clearApplicationError } from 'src/app/actions/app.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$: Observable<boolean>;
  errorMessage$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.pipe(
      select(selectHasError)
    );
    this.errorMessage$ = this.store.pipe(
      select(selectErrorMessage)
    );
  }

  dismiss(): void {
    this.store.dispatch(clearApplicationError());
  }
}
