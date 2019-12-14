import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {RouterModule} from '@angular/router';
import {FilmStoreModule} from '../../stores/film/film.module';
import {MatButtonModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FilmPageComponent}]),
    FilmStoreModule,
    MatButtonModule
  ],
  declarations: [FilmPageComponent],
  exports: [FilmPageComponent],
})
export class FilmPageModule {
}
