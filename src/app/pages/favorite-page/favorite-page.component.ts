import {Component, OnInit} from '@angular/core';
import {Film} from '../../stores/film/film.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  films$: Observable<Film[]>;

  constructor() {
  }

  ngOnInit() {
  }


  deleteFromFavorite($event: MouseEvent, film: Film) {

  }
}
