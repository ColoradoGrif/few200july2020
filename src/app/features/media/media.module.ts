import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaDataService } from './services/media.data.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MediaEffects } from './effects/media.effects';
import { MediaAppEffects } from './effects/app.effects';
@NgModule({
  declarations: [MediaComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([MediaEffects, MediaAppEffects])
  ],
  exports: [MediaComponent],
  providers: [MediaDataService]
})
export class MediaModule { }
