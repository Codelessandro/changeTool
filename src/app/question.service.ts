import {Injectable} from '@angular/core';

export class Question {
  index: number;
  title: string;
  category: string;
  text: string;
  isSlider: boolean;
  isClickbox: boolean;
  clickBoxContent?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  _questions: Question[] = [
    {
      index: 1,
      category: 'Insight & Motivation',
      title: 'Q1: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 2,
      category: 'Insight & Motivation',
      title: 'Q2: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 3,
      category: 'Insight & Motivation',
      title: 'Q3: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 4,
      category: 'Insight & Motivation',
      title: 'Q4: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },



    {
      index: 5,
      category: 'Skills & Talent',
      title: 'Q1: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 6,
      category: 'Skills & Talent',
      title: 'Q2: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 7,
      category: 'Skills & Talent',
      title: 'Q3: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 8,
      category: 'Skills & Talent',
      title: 'Q4: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },





    {
      index: 9,
      category: 'Culture',
      title: 'Q1: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 10,
      category: 'Culture',
      title: 'Q2: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 11,
      category: 'Culture',
      title: 'Q3: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 12,
      category: 'Culture',
      title: 'Q4: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },




    {
      index: 13,
      category: 'System Processes & Structure',
      title: 'Q1: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 14,
      category: 'System Processes & Structure',
      title: 'Q2: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 15,
      category: 'System Processes & Structure',
      title: 'Q3: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },    {
      index: 16,
      category: 'System Processes & Structure',
      title: 'Q4: Titel hier.',
      text: 'Genauer Text der Frage',
      isSlider: true,
      isClickbox: false
    },






  ];

  constructor() {
  }

  question(index: number) {
    return this._questions.filter( q => q.index === index)[0];
  }

}
