import {Component, OnInit} from '@angular/core';
import {Question, QuestionService} from '../question.service';
import {StateService} from '../state.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 4;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 2.5;
  vertical = false;
  tickInterval = 1;

  constructor( private route: ActivatedRoute, private router: Router, private questionService: QuestionService, private stateService: StateService) {
    this.question = this.questionService.question(1);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.question = this.questionService.question(+params.get('id'));
    });
  }




  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  save(number, answer, category) {
    this.stateService.addQuestion(number, answer, category);
    if(this.question.index==16) {
      this.router.navigate(['/evaluation']);
    } else if  (!(this.question.index % 4 === 0)) {
      const next_number = this.question.index + 1
      this.value = 2.5
      this.question = this.questionService.question(next_number);
    } else {
      this.router.navigate(['/choose']);

    }

  }

  disableSave() {
    return this.value == 2.5;
  }


}
