import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() carCount: number = 0;
  @Input() microbusCount: number = 0;
  @Input() truckCount: number = 0;
  @Input() ListOfVehicleParkOverTime: any;

  ngOnInit(): void {}
}
