import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {RouterModule} from '@angular/router';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FilmStoreModule} from '../../stores/film/film.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MainPageComponent}]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FilmStoreModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {
}
