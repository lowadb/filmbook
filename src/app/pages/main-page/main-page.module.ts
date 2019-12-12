import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MainPageComponent}])
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {
}
