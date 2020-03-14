import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChooseComponent } from './choose/choose.component';
import { QuestionComponent } from './question/question.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const appRoutes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: '', component: IntroComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'evaluation', component: EvaluationComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ChooseComponent,
    QuestionComponent,
    EvaluationComponent
  ],
  imports: [
    MatProgressBarModule,
    MatDividerModule,
    MatRadioModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
