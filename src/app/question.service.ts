import {Injectable} from '@angular/core';

export class Question {
  title: string;
  category: string;
  text: string;
  isSlider: boolean;
  isClickbox: boolean;
  final: boolean;
  clickBoxContent?: [];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  _questions: Question[] = [
    {
      category: 'Insight & Motivation',
      title: 'A1: Understanding',
      text: 'My team can tell the narrative of why we need to change and believe in it.',
      isSlider: true,
      isClickbox: false,
      final: false
    },
    {
      category: 'Culture',
      title: 'A1: Change',
      text: 'Please click the box that best describes the current situation.',
      isSlider: false,
      isClickbox: true,
      final: true,
      clickBoxContent: ['Situation A', 'Situation B', 'Situation C', 'Situation D']
    },


  ];

  constructor() {
  }

  question(index: number) {
    return this._questions[index];
  }

}
