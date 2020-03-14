import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  value1 = 20;
  value2 = 60;
  value3 = 80;
  value4 = 10;
  value5 = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
