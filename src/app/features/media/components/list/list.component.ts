import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MediaItem } from '../../models';
import { Store } from '@ngrx/store';
import { MediaState } from '../../reducers';
import { mediaConsumed } from '../../actions/list.actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() media: MediaItem[] = [];
  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
  }

  markConsumed(media: MediaItem): void {
    this.store.dispatch(mediaConsumed({ media }));
  }
}
