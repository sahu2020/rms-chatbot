import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rms-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  @Input() cards:any;

  ngOnInit() {
  }

}
