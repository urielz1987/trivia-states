import {
	Component,
	OnInit,
	ViewChild,
	ElementRef
} from '@angular/core';

import { QuestionComponent } from '../question/question.component';

import { QuestionsManagerService } from 'src/app/services/questions-manager.service';

import { GameStageComponent } from '../game-stage/game-stage.component';


@Component({
	selector: 'app-trivia-manager',
	templateUrl: './trivia-manager.component.html',
	styleUrls: ['./trivia-manager.component.scss']
})
export class TriviaManagerComponent implements OnInit {

	private correctAnswerAudio: HTMLAudioElement;
	private wrongAnswerAudio: HTMLAudioElement;
	private questionBackgroundAudio: HTMLAudioElement;

	private gamaStarted: boolean;
	private mobileMode;
	private currentStage = 1;


	

	@ViewChild(QuestionComponent) currentQuestion;
	@ViewChild('gameStage') gameStage: GameStageComponent;

	constructor(
		private questionManager: QuestionsManagerService, 
		private elementEl: ElementRef) {
		// load the audios
		this.correctAnswerAudio = new Audio();
		this.correctAnswerAudio.src = '../../../assets/audios/correctAnswer.mp3';
		this.correctAnswerAudio.load();
		
		this.wrongAnswerAudio = new Audio();
		this.wrongAnswerAudio.src = '../../../assets/audios/wrongAnswer.mp3';
		this.wrongAnswerAudio.load();
		
		this.questionBackgroundAudio = new Audio();
		this.questionBackgroundAudio.src = '../../../assets/audios/questionBackgroundAudio.mp3';
		this.questionBackgroundAudio.load();
	}

	ngOnInit() {
	}
	
	startGame() {
		// start game
		this.questionManager.startGame();
		this.gamaStarted = true;
		this.questionBackgroundAudio.play();
	}

	playCorrectAnwserAudio() {
		let endOfCorrectAnswerAudioPromise = new Promise( (res, rej) => {
			this.correctAnswerAudio.onended = () => {
				res();
			}
		});
		this.correctAnswerAudio.play();
		return endOfCorrectAnswerAudioPromise;
	}

	checkAnswer(userChoice: number) {
		this.questionBackgroundAudio.pause();
		let correctAnswerNum = this.questionManager.getCurrentQuestionCorrentAnswer();
		if (userChoice == correctAnswerNum) {
			this.currentQuestion.setCorrectAnswer(correctAnswerNum);
			this.gameStage.blinkStage(this.currentStage);
			this.playCorrectAnwserAudio().then( () => {
				this.gameStage.stopBlinkStage(this.currentStage);
				this.currentStage++;
				this.questionManager.loadNextQuestion();
				this.questionBackgroundAudio.play();
			});
		} else {
			this.wrongAnswerAudio.play();
			this.currentQuestion.setCorrectAnswer(correctAnswerNum);
			this.currentQuestion.setWrongAnswer(userChoice);
		}
	}

}
