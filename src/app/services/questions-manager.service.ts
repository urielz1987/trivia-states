import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Question } from '../classes/Question';
import { IQuestion } from '../interfaces/question';

@Injectable({
	providedIn: 'root'
})
export class QuestionsManagerService {

	public questionManager: Observable<IQuestion>;
	private observer: Subscriber<IQuestion>;
	private questionsStore: Question[] = [];
	private currentQuestionNum = 0;

	constructor() {
		this.questionsStore.push(new Question({
			question: "Who was the first prime minister of Canada ?",
			answer1: "Alexander Mackenzie",
			answer2: "Robert Borden",
			answer3: "John A. Macdonald",
			answer4: "Arthur Meighen",
			correctAnswer: 3
		}));
		this.questionsStore.push(new Question({
			question: "In what year did Canada become independent ?",
			answer1: "1867",
			answer2: "1820",
			answer3: "1891",
			answer4: "1912",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "How many provinces are there in Canada ?",
			answer1: "10",
			answer2: "6",
			answer3: "12",
			answer4: "5",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "What is the capital city of Ontario ?",
			answer1: "Toronto",
			answer2: "Ottawa–Gatineau",
			answer3: "Montreal",
			answer4: "Vancouver",
			correctAnswer: 1
		}));
		
		this.questionsStore.push(new Question({
			question: "What is the capital city of Canada ?",
			answer1: "Ottawa",
			answer2: "Edmonton",
			answer3: "London",
			answer4: "Kingston",
			correctAnswer: 1
		}));
		
		this.questionsStore.push(new Question({
			question: "Which of the following is a name of a bridge that connects Niagara Falls Ontario to Niagara Falls New York ?",
			answer1: "The Rainbow Bridge",
			answer2: "The Peace Bridge",
			answer3: "Blue Water Bridge",
			answer4: "Kingston",
			correctAnswer: 1
		}));
	}

	public startGame() {
		this.questionManager = new Observable((observer: Subscriber<IQuestion>) => {
			this.observer = observer;
			this.observer.next(this.questionsStore[0].getQuestionForPlay());
		});
	}

	public loadNextQuestion() {
		if ( (this.questionsStore.length -1) > this.currentQuestionNum) {
			this.currentQuestionNum++;
			this.observer.next(this.questionsStore[this.currentQuestionNum].getQuestionForPlay());
		}
	}

	getCurrentQuestionCorrentAnswer() {
		return this.questionsStore[this.currentQuestionNum].getCorrectAnswer();
	}
}
