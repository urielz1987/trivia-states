import { Component, OnInit, Renderer2 } from '@angular/core';

import { triviaStatesDetails } from './others/triviaStatesDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trivia-states';

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    if (document.documentElement.clientWidth < triviaStatesDetails.mobileLimit) {
      // set a class on the body
      this.renderer.addClass(document.body, 'mobile-mode');
      // set on the windows that it's a mobile
      triviaStatesDetails.isMobile = true;
    }
  }


}
