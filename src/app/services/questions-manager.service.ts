import { Subject } from 'rxjs';
import { Question } from '../classes/Question';
import { IQuestion } from '../interfaces/question';

/*
@Injectable({
	providedIn: 'root'
})
*/
export class QuestionsManagerService {

	public questionManagerSubject: Subject<IQuestion>;
	private questionsStore: Question[] = [];
	private currentQuestionNum = -1;

	constructor() {
		this.questionsStore.push(new Question({
			question: "Who was the first prime minister of Canada&nbsp;?",
			answer1: "Alexander Mackenzie",
			answer2: "Robert Borden",
			answer3: "John A. Macdonald",
			answer4: "Arthur Meighen",
			correctAnswer: 3
		}));
		this.questionsStore.push(new Question({
			question: "In what year did Canada become independent&nbsp;?",
			answer1: "1867",
			answer2: "1820",
			answer3: "1891",
			answer4: "1912",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "How many provinces are there in Canada&nbsp;?",
			answer1: "10",
			answer2: "6",
			answer3: "12",
			answer4: "5",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "What is the capital city of Ontario&nbsp;?",
			answer1: "Toronto",
			answer2: "Ottawa–Gatineau",
			answer3: "Montreal",
			answer4: "Vancouver",
			correctAnswer: 1
		}));
		
		this.questionsStore.push(new Question({
			question: "What is the capital city of Canada&nbsp;?",
			answer1: "Ottawa",
			answer2: "Edmonton",
			answer3: "London",
			answer4: "Kingston",
			correctAnswer: 1
		}));
		
		this.questionsStore.push(new Question({
			question: "Which of the following is a name of a bridge that connects Niagara Falls Ontario to Niagara Falls New York&nbsp;?",
			answer1: "The Rainbow Bridge",
			answer2: "The Peace Bridge",
			answer3: "Blue Water Bridge",
			answer4: "Kingston",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "Name a famous British Colombia ski resort&nbsp;?",
			answer1: "Mont Tremblant",
			answer2: "Whistler",
			answer3: "Blue Mountain",
			answer4: "Labbatt Blue",
			correctAnswer: 2
		}));

		this.questionsStore.push(new Question({
			question: "What is Canada’s national sport&nbsp;?",
			answer1: "Lacrosse",
			answer2: "Hockey",
			answer3: "Baseball",
			answer4: "Curling",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "What is the largest shopping mall in Canada&nbsp;?",
			answer1: "Yorkdale",
			answer2: "West Edmonton Mall",
			answer3: "East Edmonton Mall",
			answer4: "Rockland Shopping Centre",
			correctAnswer: 2
		}));

		this.questionsStore.push(new Question({
			question: "What is the name of the iconic Canadian coffee shop&nbsp;?",
			answer1: "Starbucks",
			answer2: "Java Jaclyn",
			answer3: "Tim Horton's",
			answer4: "Bubby’s",
			correctAnswer: 3
		}));

		this.questionsStore.push(new Question({
			question: "80% of this product is made in Canada&nbsp;-",
			answer1: "French Fries",
			answer2: "Snow Cones",
			answer3: "Maple Syrup",
			answer4: "Popcicles",
			correctAnswer: 3
		}));

		this.questionsStore.push(new Question({
			question: "What is Canada's one dollar coin called&nbsp;?",
			answer1: "One-nee",
			answer2: "Beaveree",
			answer3: "Loonie",
			answer4: "Moosie",
			correctAnswer: 3
		}));

		this.questionsStore.push(new Question({
			question: "What is the name of the big prize in the National Hockey League&nbsp;?",
			answer1: "The Claret Jug",
			answer2: "The Grey Cup",
			answer3: "The Hockey Puck",
			answer4: "The Stanley Cup",
			correctAnswer: 4
		}));

		this.questionsStore.push(new Question({
			question: "Who was the first Canadian Astronaut in space&nbsp;?",
			answer1: "Marc Garneau",
			answer2: "Roberta Bondar",
			answer3: "Sally Ride",
			answer4: "Ilan Ramon",
			correctAnswer: 1
		}));

		this.questionsStore.push(new Question({
			question: "Where were the Summer Olympics held in 1976&nbsp;?",
			answer1: "Toronto",
			answer2: "Flin Flon",
			answer3: "Moose Jaw",
			answer4: "Montreal",
			correctAnswer: 4
		}));

		this.questionsStore.push(new Question({
			question: "What is Canada's tallest free-standing structure&nbsp;?",
			answer1: "Justin's Tower",
			answer2: "Timbit Tower",
			answer3: "CN Tower",
			answer4: "Drake Tower",
			correctAnswer: 3
		}));
	}

	private mixQuestions() {
		// Mix the questions 
		for (let idx = 0; idx < this.questionsStore.length; idx++) {
			let randomNum = Math.floor(Math.random() * this.questionsStore.length);
			let tmpQuestion = this.questionsStore[randomNum];
			this.questionsStore[randomNum] = this.questionsStore[idx];
			this.questionsStore[idx] = tmpQuestion;
		}
	}

	public startGame() {
		this.currentQuestionNum = -1;
		this.questionManagerSubject = new Subject();
		this.mixQuestions();
		/*
		(observer: Subscriber<IQuestion>) => {
			this.observer = observer;
			this.observer.next(this.questionsStore[0].getQuestionForPlay());
		}
		*/
	}

	public loadNextQuestion() {
		if ( (this.questionsStore.length -1) > this.currentQuestionNum) {
			this.currentQuestionNum++;
			this.questionManagerSubject.next(this.questionsStore[this.currentQuestionNum].getQuestionForPlay());
		}
	}

	getCurrentQuestionCorrentAnswer() {
		return this.questionsStore[this.currentQuestionNum].getCorrectAnswer();
	}
}
