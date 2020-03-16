import {Component, OnInit} from '@angular/core';
import {Question, QuestionService} from '../question.service';

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

  constructor(private questionService: QuestionService) {
    this.question = this.questionService.question(0);
  }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  save() {
    this.question = this.questionService.question(1);
  }

  disableSave() {
    return this.value == 2.5
  }


}
