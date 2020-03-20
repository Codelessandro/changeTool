import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from '../question.service';
import {StateService} from '../state.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  value1 = 20;
  value2 = 60;
  value3 = 80;
  value4 = 10;
  value5 = 100;

  constructor(private stateService: StateService, private router: Router, private questionService: QuestionService) { }

  dimensions:any[];

  ngOnInit(): void {

    this.dimensions = Array.from(new Set(this.questionService._questions.map( q => q.category )));

    debugger
    this.dimensions = this.dimensions.map( d => [d,
      this.stateService.questionsAnswered.filter( q => q[2] === d ).map( q => q[1]).reduce( (a,b) => a+b ,0 )
    ])
  }




}
