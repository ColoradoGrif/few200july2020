import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MediaState, selectMediaLitems } from './reducers';
import { Observable } from 'rxjs';
import { MediaItem } from './models';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  media$: Observable<MediaItem[]>;
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.media$ = this.store.pipe(
      select(selectMediaLitems)
    );
  }

}
