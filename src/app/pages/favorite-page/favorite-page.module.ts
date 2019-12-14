import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritePageComponent} from './favorite-page.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FavoritePageComponent}]),
    MatCardModule
  ],
  declarations: [FavoritePageComponent],
  exports: [FavoritePageComponent],
})
export class FavoritePageModule {
}
