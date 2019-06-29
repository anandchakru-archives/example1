import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nivite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng8';
  invite;
  ngOnInit() {
    document.addEventListener('niviteLoaded', (event) => {
      this.invite = ((event as CustomEvent).detail);
    });
  }
}
