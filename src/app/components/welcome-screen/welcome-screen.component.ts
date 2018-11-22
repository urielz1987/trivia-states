import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  @Output('startGame') _startGame = new EventEmitter<string>();

  private imgPath;
  
  constructor() { 
    if (window.document.documentElement.clientWidth < 768) {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionareMobile.png";
    } else {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionare.png";
    }
  }

  startGame() {
    this._startGame.emit();
  }

}
