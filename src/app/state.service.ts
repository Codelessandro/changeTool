import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
  }


  questionsAnswered = [];

  addQuestion(questionId: number, answer: number, category: string) {
    this.questionsAnswered.push([
      questionId,
      answer,
      category
    ]);
    console.log(this.questionsAnswered)
  }

}
