import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsManagerService } from 'src/app/services/questions-manager.service';

@Component({
  selector: 'app-prize-money',
  templateUrl: './prize-money.component.html',
  styleUrls: ['./prize-money.component.scss']
})
export class PrizeMoneyComponent implements OnInit {

  constructor(
    private router: Router,
    private questionsManagerService: QuestionsManagerService) { }

  ngOnInit() {
  }

  goToWelcomePage() {
    this.questionsManagerService.startGame();
    this.router.navigateByUrl('Canada/Play');
  }

}
