import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Batman & Robbin';
  bestMovieEver = false;
  favFlop = {
    title: 'wing commander',
    yearReleased: 1999,
    rating: 'PG-13',
    imdbLink: 'https://www.google.com',
  };
}
