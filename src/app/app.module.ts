import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { TriviaManagerComponent } from './components/trivia-manager/trivia-manager.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TriviaManagerComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
