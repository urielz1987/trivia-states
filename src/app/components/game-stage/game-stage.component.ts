import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-stage',
  templateUrl: './game-stage.component.html',
  styleUrls: ['./game-stage.component.scss']
})
export class GameStageComponent implements OnInit {

  private stages = [
    100,
    200,
    300,
    500,
    1000,
    2000,
    4000,
    8000,
    16000,
    32000,
    64000,
    125000,
    250000,
    500000,
    1000000
  ]

  constructor() { }

  ngOnInit() {
  }

}
