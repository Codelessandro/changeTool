import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ChooseComponent } from './choose/choose.component';
import { QuestionComponent } from './question/question.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ChooseComponent,
    QuestionComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
