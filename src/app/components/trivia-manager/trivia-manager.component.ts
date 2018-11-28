import {
	Component,
	OnInit,
	ViewChild,
	ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsManagerService } from 'src/app/services/questions-manager.service';

import { GameStageComponent } from '../game-stage/game-stage.component';


@Component({
	selector: 'app-trivia-manager',
	templateUrl: './trivia-manager.component.html',
	styleUrls: ['./trivia-manager.component.scss']
})
export class TriviaManagerComponent implements OnInit {

	protected correctAnswerAudio: HTMLAudioElement;
	protected wrongAnswerAudio: HTMLAudioElement;
	protected questionBackgroundAudio: HTMLAudioElement;

	protected gamaStarted: boolean;
	protected mobileMode;
	protected currentStage = 1;
	protected isPlayInPause = false;
	protected gameEnded = false;
	
	@ViewChild('currentQuestion') currentQuestion;
	@ViewChild('gameStage') gameStage: GameStageComponent;

	constructor(
		private questionManager: QuestionsManagerService, 
		private elementEl: ElementRef,
		private router: Router) {
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
	
	ngAfterViewInit() {
		// start the game
		this.questionManager.loadNextQuestion();
		this.questionBackgroundAudio.play();
	}
	
	startGame() {
		// start game
		//this.questionManager.startGame();
		this.gamaStarted = true;
		this.currentStage = 1;
		this.gameEnded = false;
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

	playWrongAnwserAudio() {
		let endOfWrongAnswerAudioPromise = new Promise( (res, rej) => {
			this.wrongAnswerAudio.onended = () => {
				res();
			}
		});
		this.wrongAnswerAudio.play();
		return endOfWrongAnswerAudioPromise;
	}

	checkAnswer(userChoice: number) {
		if (!this.isPlayInPause) {
			this.isPlayInPause = true;
			// stop background audio
			this.questionBackgroundAudio.pause();
			this.questionBackgroundAudio.currentTime = 0;
			let correctAnswerNum = this.questionManager.getCurrentQuestionCorrentAnswer();
			if (userChoice == correctAnswerNum) {
				this.currentQuestion.setCorrectAnswer(correctAnswerNum);
				this.gameStage.blinkStage(this.currentStage);
				this.playCorrectAnwserAudio().then( () => {
					this.gameStage.stopBlinkStage(this.currentStage);
					this.currentStage++;
					this.questionManager.loadNextQuestion();
					this.questionBackgroundAudio.play();
					this.isPlayInPause = false;
				});
			} else {
				this.wrongAnswerAudio.play();
				this.currentQuestion.setCorrectAnswer(correctAnswerNum);
				this.currentQuestion.setWrongAnswer(userChoice);
				this.gameEnded = true;
				this.playWrongAnwserAudio().then( () => {
					this.router.navigateByUrl('Canada/Prize');
				});
			}
		}
	}

}
