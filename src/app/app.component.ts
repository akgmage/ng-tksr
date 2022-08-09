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
    soundTrack: {
      youtubeLink: 'https://www.youtube.com',
    },
  };
  dataClicked(event: Event) {
    const target = event.target as HTMLElement;
    console.log('year clicked', target.innerText);
  }
}
