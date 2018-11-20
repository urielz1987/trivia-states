import { IQuestion } from "../interfaces/question";


export class Question {
	private question = "";
	private answers = [];
	private correctAnswer;

	constructor(all?: IQuestion) {
		this.setAll(all);
	}

	setAll(all: IQuestion) {
		this.question = all.question;
		this.answers.push(all.answer1);
		this.answers.push(all.answer2);
		this.answers.push(all.answer3);
		this.answers.push(all.answer4);
		this.correctAnswer = all.correctAnswer - 1;
	}

	setQuestion(txt) {
		this.question = txt;
	}

	setAnswer1(txt) {
		this.answers[0] = txt;
	}

	setAnswer2(txt) {
		this.answers[1] = txt;
	}

	setAnswer3(txt) {
		this.answers[2] = txt;
	}

	setAnswer4(txt) {
		this.answers[3] = txt;
	}

	public getQuestionForPlay(): IQuestion {
		this.mixAnswers();
		return {
			question: this.question,
			answer1: this.answers[0],
			answer2: this.answers[1],
			answer3: this.answers[2],
			answer4: this.answers[3]
		}
	}

	getCorrectAnswer() {
		// for the client it's 1, 2, 3, 4
		return this.correctAnswer + 1;
	}

	private mixAnswers() {
		for(let idx = 0; idx < 4; idx++) {
			// rnd 0-3
			// update the correct answer
			let rndNum = Math.floor(Math.random() *  4);
			if (rndNum == this.correctAnswer) {
				this.correctAnswer = idx;
			} else if (idx == this.correctAnswer) {
				this.correctAnswer = rndNum;
			}
			// switch the answers
			[this.answers[idx], this.answers[rndNum]] = [this.answers[rndNum], this.answers[idx]];
		}
	}
}