import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';
import {Router} from '@angular/router';
import {StateService} from '../state.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  constructor(private router: Router, private stateService: StateService, private questionService: QuestionService) {
  }


  dimensions: any[];

  ngOnInit(): void {
    this.dimensions = Array.from(new Set(this.questionService._questions.map(q => q.category)));
    const alreadyFilledIn = Array.from(new Set(this.stateService.questionsAnswered.map(v => v[2])));

    this.dimensions = this.dimensions.map(d => {
        const is_disabled = alreadyFilledIn.includes(d)
        return [d, is_disabled];
      }
    );
    debugger;

  }

  goToQuestion(question: number, isDisabled: boolean) {
    if (!isDisabled) {
      this.router.navigate(['/question/', question]);
    } else {
    }
  }

}
