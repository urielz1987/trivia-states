import { Component, OnInit, Renderer2 } from '@angular/core';

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
    if (document.documentElement.clientWidth < 750) {
      this.renderer.addClass(document.body, 'mobile-mode');
    }
  }


}
