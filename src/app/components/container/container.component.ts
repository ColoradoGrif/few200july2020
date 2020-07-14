import { Component, OnInit, OnDestroy } from '@angular/core';
import { StuffService } from '../../services/stuff.service';
import { map, filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  // listHeader = 'This is the list';
  stuff = [];
  sub: Subscription;
  constructor(private service: StuffService) {
    // service.getData().subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this.sub = this.service.getData().pipe(
      map(data => data.map(thingy => thingy.toUpperCase())),
      tap(x => console.log(x)),
      tap(x => this.stuff = x)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
