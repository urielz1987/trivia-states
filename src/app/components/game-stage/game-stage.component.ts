import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-stage',
  templateUrl: './game-stage.component.html',
  styleUrls: ['./game-stage.component.scss']
})
export class GameStageComponent {

  @Input('currentStage') currentStage;

  @ViewChild('stagesEl') stagesEl: ElementRef;

  private stages = [1000000, 500000, 250000, 125000, 64000, 32000, 16000, 8000, 4000, 2000, 1000, 500, 300, 200, 100]

  constructor() { }

  public blinkStage(stageNum) {
    let elementToBlink = this.stagesEl.nativeElement.querySelector(`#stage${stageNum}`);
    elementToBlink.classList.add("blink-me");
  }

  public stopBlinkStage(stageNum) {
    let elementToBlink = this.stagesEl.nativeElement.querySelector(`#stage${stageNum}`);
    elementToBlink.classList.remove("blink-me");
  }

}
