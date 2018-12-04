import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsManagerService } from 'src/app/services/questions-manager.service';

import { GameStageComponent } from '../game-stage/game-stage.component';
import { TriviaStatesDetailsService } from 'src/app/services/trivia-states-details.service';
import { TimerComponent } from '../timer/timer.component';


@Component({
	selector: 'app-trivia-manager',
	templateUrl: './trivia-manager.component.html',
	styleUrls: ['./trivia-manager.component.scss']
})
export class TriviaManagerComponent implements OnInit {

	public correctAnswerAudio: HTMLAudioElement;
	public wrongAnswerAudio: HTMLAudioElement;
	public questionBackgroundAudio: HTMLAudioElement;
	public isMuted = false;

	public gamaStarted: boolean;
	public mobileMode;
	public currentStage = 1;
	public isPlayInPause = false;
	public gameEnded = false;
	
	@ViewChild('currentQuestion') currentQuestion;
	@ViewChild('gameStage') gameStage: GameStageComponent;
	@ViewChild('gameTimer') gameTimer: TimerComponent;

	constructor(
		private questionManager: QuestionsManagerService, 
		private elementEl: ElementRef,
		private router: Router,
		private triviaStatesDetailsService: TriviaStatesDetailsService) {
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

		// mute
		this.isMuted = triviaStatesDetailsService.getIsMuted();
		this.setMuteCfg();

		if (triviaStatesDetailsService.getIsMobile()) {
			// on onblur and on focus
			window.onblur =  () => {
				console.log("Blur");
				this.questionBackgroundAudio.muted = true;
				this.correctAnswerAudio.muted = true;
				this.wrongAnswerAudio.muted = true;
			};
			
			window.onfocus = () => {
				console.log("Focus");
				this.setMuteCfg();
			};
		}
			
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
			// pause the timer
			this.gameTimer.pause();
			this.questionBackgroundAudio.currentTime = 0;
			let correctAnswerNum = this.questionManager.getCurrentQuestionCorrentAnswer();
			if (userChoice == correctAnswerNum) {
				this.currentQuestion.setCorrectAnswer(correctAnswerNum);
				this.gameStage.blinkStage(this.currentStage);
				this.playCorrectAnwserAudio().then( () => {
					// if finish the game
					if (this.currentStage == 15) {
						this.router.navigate(['Canada/Prize'], {
							queryParams: {
								totalPrizeMoney: this.gameStage.getStageTotalMoney(this.currentStage + 1)
							}
						});
					} else {
						this.gameStage.stopBlinkStage(this.currentStage);
						this.currentStage++;
						this.questionManager.loadNextQuestion();
						this.questionBackgroundAudio.play();
						this.isPlayInPause = false;
						this.gameTimer.restart();
					}
				});
			} else {
				this.wrongAnswerAudio.play();
				this.currentQuestion.setCorrectAnswer(correctAnswerNum);
				this.currentQuestion.setWrongAnswer(userChoice);
				this.gameEnded = true;
				this.playWrongAnwserAudio().then( () => {
					this.router.navigate(['Canada/Prize'], {
						queryParams: {
							totalPrizeMoney: this.gameStage.getStageTotalMoney(this.currentStage)
						}
					});
				});
			}
		}
	}

	questionTimeout() {
		this.isPlayInPause = true;
		let correctAnswerNum = this.questionManager.getCurrentQuestionCorrentAnswer();
		this.currentQuestion.setCorrectAnswer(correctAnswerNum);
		setTimeout(() => {
			this.router.navigate(['Canada/Prize'], {
				queryParams: {
					totalPrizeMoney: this.gameStage.getStageTotalMoney(this.currentStage)
				}
			});
		}, 5000);
	}

	toggleMute() {
		this.isMuted = !this.isMuted;
		this.setMuteCfg();
		this.triviaStatesDetailsService.toggleMute();
	}

	private setMuteCfg() {
		this.questionBackgroundAudio.muted = this.isMuted;
		this.correctAnswerAudio.muted = this.isMuted;
		this.wrongAnswerAudio.muted = this.isMuted;
	}

	

}
