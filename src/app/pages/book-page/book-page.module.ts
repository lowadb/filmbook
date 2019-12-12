import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookPageComponent} from './book-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BookPageComponent}])
  ],
  declarations: [BookPageComponent],
  exports: [BookPageComponent],
})
export class BookPageModule {
}
