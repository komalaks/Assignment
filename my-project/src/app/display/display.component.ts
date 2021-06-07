import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  data = [];
  constructor() {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('myobj'));
  }
}
