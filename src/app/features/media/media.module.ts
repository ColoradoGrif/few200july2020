import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MediaComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule
  ],
  exports: [MediaComponent]
})
export class MediaModule { }
