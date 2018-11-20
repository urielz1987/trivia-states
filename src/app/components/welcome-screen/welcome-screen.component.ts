import { Component, Output, EventEmitter } from '@angular/core';

import { triviaStatesDetails } from '../../others/triviaStatesDetails';
@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  @Output('startGame') _startGame = new EventEmitter<string>();

  private imgPath;
  
  constructor() { 
    if (triviaStatesDetails.isMobile) {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionareMobile.png";
    } else {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionare.png";
    }
  }

  startGame() {
    this._startGame.emit();
  }

}
