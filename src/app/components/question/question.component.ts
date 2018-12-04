import { 
	Component, 
	ViewChild, 
	ElementRef,
	EventEmitter,
	Output, 
	OnInit
} from '@angular/core';

import { QuestionsManagerService } from '../../services/questions-manager.service';
import { IQuestion } from '../../interfaces/question';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
	@Output() selectedAnswer = new EventEmitter<number>();

	public question;
	public _answer1;
	public _answer2;
	public _answer3;
	public _answer4;

	@ViewChild('answer1') answerEl1: ElementRef;
	@ViewChild('answer2') answerEl2: ElementRef;
	@ViewChild('answer3') answerEl3: ElementRef;
	@ViewChild('answer4') answerEl4: ElementRef;

	ngOnInit() {
		this.questionsManager.questionManagerSubject.subscribe((question: IQuestion) => {
			setTimeout( () => {
				// removes previous classes
				this.answerEl1.nativeElement.classList.remove("correct-answer");
				this.answerEl2.nativeElement.classList.remove("correct-answer");
				this.answerEl3.nativeElement.classList.remove("correct-answer");
				this.answerEl4.nativeElement.classList.remove("correct-answer");

				this.answerEl1.nativeElement.classList.remove("wrong-answer");
				this.answerEl2.nativeElement.classList.remove("wrong-answer");
				this.answerEl3.nativeElement.classList.remove("wrong-answer");
				this.answerEl4.nativeElement.classList.remove("wrong-answer");
				
				this.question = question.question;
				this._answer1 = question.answer1;
				this._answer2 = question.answer2;
				this._answer3 = question.answer3;
				this._answer4 = question.answer4;
			});
		});
	}

	constructor(private questionsManager: QuestionsManagerService) {
	}

	answerClick(answerNum) {
		this.selectedAnswer.emit(answerNum);
	}

	public setCorrectAnswer(num) {
		this['answerEl' + num].nativeElement.classList.add("correct-answer");
	}

	public setWrongAnswer(num) {
		this['answerEl' + num].nativeElement.classList.add("wrong-answer");
	}

}
