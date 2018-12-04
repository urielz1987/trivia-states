import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionsManagerService } from 'src/app/services/questions-manager.service';

@Component({
  selector: 'app-prize-money',
  templateUrl: './prize-money.component.html',
  styleUrls: ['./prize-money.component.scss']
})
export class PrizeMoneyComponent implements OnInit {

  public totalPrizeMoney;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionsManagerService: QuestionsManagerService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.totalPrizeMoney = params.totalPrizeMoney
      });
  }

  goToWelcomePage() {
    this.questionsManagerService.startGame();
    this.router.navigateByUrl('Canada/Play');
  }

}
