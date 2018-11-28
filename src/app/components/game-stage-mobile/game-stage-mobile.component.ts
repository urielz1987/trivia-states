import { Component, OnInit } from '@angular/core';

import { GameStageComponent } from '../game-stage/game-stage.component';

@Component({
  selector: 'app-game-stage-mobile',
  templateUrl: './game-stage-mobile.component.html',
  styleUrls: ['../game-stage/game-stage.component.scss']
})
export class GameStageMobileComponent extends GameStageComponent {

  constructor() { 
    super();
  }

}
