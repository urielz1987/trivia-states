import { Component, OnInit } from '@angular/core';

import { QuestionComponent } from '../question/question.component';
import { QuestionsManagerService } from '../../services/questions-manager.service';


@Component({
  selector: 'app-question-mobile',
  templateUrl: './question-mobile.component.html',
  styleUrls: ['../question/question.component.scss']
})
export class QuestionMobileComponent extends QuestionComponent {

  constructor(questionsManager: QuestionsManagerService) {
    super(questionsManager);
   }

}
