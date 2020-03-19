import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
  }


  questionsAnswered: [] = [];

  addQuestion(questionId: number, answer: number) {
    this.questionsAnswered.push([
      questionId,
      answer
    ]);
    console.log(this.questionsAnswered)
  }

}
