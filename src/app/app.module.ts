import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { TriviaManagerComponent } from './components/trivia-manager/trivia-manager.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { GameStageComponent } from './components/game-stage/game-stage.component';
import { ReverseArrayPipe } from './pipes/reverse-array.pipe';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TriviaManagerComponent,
    GameStageComponent,
    ReverseArrayPipe,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
