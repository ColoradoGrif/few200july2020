import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MediaState } from '../../reducers';
import * as actions from '../../actions/list.actions';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  mediaForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.mediaForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      format: ['', [Validators.required]],
      recommendedBy: ['', [Validators.required]],
      note: ['', []]
    });

  }

  get title(): AbstractControl { return this.mediaForm.get('title'); }
  get format(): AbstractControl { return this.mediaForm.get('format'); }
  // etc etc.
  submit(focusMe: HTMLInputElement): void {
    this.store.dispatch(actions.mediaItemAdded({ ...this.mediaForm.value }));

    this.mediaForm.reset();
    focusMe.focus();
  }

}
