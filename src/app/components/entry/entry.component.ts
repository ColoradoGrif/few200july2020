import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StuffService } from 'src/app/services/stuff.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {


  constructor(private service: StuffService) { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement): void {
    // console.log(what.value);
    // this.added.emit(what.value);
    this.service.addItem(what.value);
    what.value = '';
    what.focus();
  }
}
