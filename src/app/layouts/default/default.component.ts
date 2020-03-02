import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpan = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggle( ) {
    this.sideBarOpan = !this.sideBarOpan;
  }

}
