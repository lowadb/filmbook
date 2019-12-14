import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FilmPageComponent}])
  ],
  declarations: [FilmPageComponent],
  exports: [FilmPageComponent],
})
export class FilmPageModule {
}
