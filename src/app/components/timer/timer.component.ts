import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITimerConfiguration } from 'src/app/interfaces/timerConfiguration';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private initialTime; 
  public timeLeft;
  private timeToStartShow;
  private isPlayInPause;

  @Input('cfg') cfg: ITimerConfiguration;
  @Output() timerTimeout = new EventEmitter<string>(); 

  constructor() {


   }

  ngOnInit() {
    this.initialTime = this.cfg.initialTime;
    this.timeLeft = this.cfg.initialTime;
    this.timeToStartShow = this.cfg.timeToStartShow;

    let intervalId = setInterval( () => {
      if (!this.isPlayInPause) {
        this.timeLeft--;
        if (this.timeLeft == 0) {
          clearInterval(intervalId);
          this.timerTimeout.emit('timeout');
          this.isPlayInPause = true;
        }
      }
    }, 1000);
  }

  public pause() {
    this.isPlayInPause = true;
  }
  
  public restart() {
    // back to the initial time
    this.timeLeft = this.cfg.initialTime;
    this.isPlayInPause = false;
  }

}
