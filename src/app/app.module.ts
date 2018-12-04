import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { routing, appRoutingProviders } from './routing/app.routes';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { TriviaManagerComponent } from './components/trivia-manager/trivia-manager.component';
import { TriviaManagerMobileComponent } from './components/trivia-manager-mobile/trivia-manager-mobile.component';

import { QuestionsManagerService } from './services/questions-manager.service';
import { TriviaStatesDetailsService } from './services/trivia-states-details.service';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { GameStageComponent } from './components/game-stage/game-stage.component';
import { ReverseArrayPipe } from './pipes/reverse-array.pipe';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { QuestionMobileComponent } from './components/question-mobile/question-mobile.component';
import { GameStageMobileComponent } from './components/game-stage-mobile/game-stage-mobile.component';
import { PrizeMoneyComponent } from './components/prize-money/prize-money.component';
import { TimerComponent } from './components/timer/timer.component';
import { SecondsDisplayPipe } from './pipes/seconds-display.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TriviaManagerComponent,
    TriviaManagerMobileComponent,
    GameStageComponent,
    ReverseArrayPipe,
    WelcomeScreenComponent,
    QuestionMobileComponent,
    GameStageMobileComponent,
    PrizeMoneyComponent,
    TimerComponent,
    SecondsDisplayPipe
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    QuestionsManagerService,
    TriviaStatesDetailsService
  ],
  entryComponents: [
    WelcomeScreenComponent,
    TriviaManagerComponent,
    TriviaManagerMobileComponent,
    PrizeMoneyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
