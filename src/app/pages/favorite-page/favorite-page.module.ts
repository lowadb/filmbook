import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritePageComponent} from './favorite-page.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FilmStoreModule} from '../../stores/film/film.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FavoritePageComponent}]),
    MatCardModule,
    FilmStoreModule,
    MatButtonModule
  ],
  declarations: [FavoritePageComponent],
  exports: [FavoritePageComponent],
})
export class FavoritePageModule {
}
