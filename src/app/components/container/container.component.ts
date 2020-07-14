import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  // listHeader = 'This is the list';
  stuff = [
    'Shoes',
    'Broom',
    'Hat'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addTheItem(item: string): void {
    this.stuff = [item, ...this.stuff]; // immutable.
    // this.stuff.unshift(item); // mutations
  }
}
