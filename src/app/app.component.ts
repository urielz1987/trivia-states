import { Component, OnInit, Renderer2 } from '@angular/core';
import { TriviaStatesDetailsService } from './services/trivia-states-details.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trivia-states';
  private isMobile;

  constructor(
    private renderer: Renderer2,
    private triviaStatesDetailsService: TriviaStatesDetailsService) {
  }

  ngOnInit() {
    this.triviaStatesDetailsService.checkDevice();
    if (this.triviaStatesDetailsService.getIsMobile()) {
      // set a class on the body
      this.renderer.addClass(document.body, 'mobile-mode');
      this.isMobile = true;
    } else {
      this.renderer.addClass(document.body, 'desktop-mode');
    }
  }


}
