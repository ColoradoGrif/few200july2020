import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { MediaEntity } from '../reducers/list.reducer';
import { map } from 'rxjs/operators';
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

}
