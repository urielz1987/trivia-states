import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';


import { TriviaManagerMobileComponent } from '../trivia-manager-mobile/trivia-manager-mobile.component';

import { TriviaStatesDetailsService } from '../../services/trivia-states-details.service'
import { QuestionsManagerService } from '../../services/questions-manager.service';
import { TriviaManagerComponent } from '../trivia-manager/trivia-manager.component';


@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

  @Output('startGame') _startGame = new EventEmitter<string>();

  public imgPath;
  
  constructor(
    private triviaStatesDetailsService: TriviaStatesDetailsService,
    private questionsManagerService: QuestionsManagerService,
    private router: Router) {
    if (window.document.documentElement.clientWidth < 768) {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionareMobile.png";
    } else {
      this.imgPath = "../../../assets/images/whoWantsToBeMillionare.png";
    }
    // update the routes
    if (this.triviaStatesDetailsService.getIsMobile()) {
      this.router.config.unshift({ path: 'Canada/Play', component: TriviaManagerMobileComponent });
    } else {
      this.router.config.unshift({ path: 'Canada/Play', component: TriviaManagerComponent });
    }
  }

  startGame() {
    this.questionsManagerService.startGame();
    this.router.navigateByUrl('Canada/Play');
  }

}
