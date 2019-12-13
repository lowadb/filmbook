import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookPageComponent} from './book-page.component';
import {RouterModule} from '@angular/router';
import {FilmStoreModule} from '../../stores/film/film.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BookPageComponent}]),
    FilmStoreModule
  ],
  declarations: [BookPageComponent],
  exports: [BookPageComponent],
})
export class BookPageModule {
}
