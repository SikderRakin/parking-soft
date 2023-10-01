import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
})
export class LeftNavComponent implements OnInit {
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';

  //left menu items visibility
  visiblePos: Boolean = true;

  constructor(private router: Router,) { }

  ngOnInit(): void { }


}
