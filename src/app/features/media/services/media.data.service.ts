import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { MediaEntity } from '../reducers/list.reducer';
import { map } from 'rxjs/operators';
import { MediaItem } from '../models';
@Injectable()
export class MediaDataService {
  private readonly baseUrl: string;

  constructor(private client: HttpClient) {
    this.baseUrl = environment.mediaUrl;
  }

  getAll(): Observable<MediaEntity[]> {
    return this.client.get<{ data: MediaEntity[] }>(this.baseUrl).pipe(
      map(response => response.data)
    );
  }

  addOne(media: MediaEntity): Observable<MediaEntity> {
    const itemToPost = {
      title: media.title,
      format: media.format,
      recommendedBy: media.recommendedBy,
      note: media.note
    };
    return this.client.post<MediaEntity>(this.baseUrl, itemToPost);
  }

}
