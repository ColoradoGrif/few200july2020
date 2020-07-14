import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Output() added = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(what: HTMLInputElement): void {
    // console.log(what.value);
    this.added.emit(what.value);
    what.value = '';
    what.focus();
  }
}
