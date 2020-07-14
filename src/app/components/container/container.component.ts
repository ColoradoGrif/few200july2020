import { Component, OnInit, OnDestroy } from '@angular/core';
import { StuffService } from '../../services/stuff.service';
import { map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  // listHeader = 'This is the list';
  stuff$: Observable<string[]>;

  constructor(private service: StuffService) {
    // service.getData().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this.stuff$ = this.service.getData().pipe(
      map(data => data.map(thingy => thingy.toUpperCase())),
      tap(x => console.log(x))
    );
  }

  ngOnDestroy(): void {

  }

}
