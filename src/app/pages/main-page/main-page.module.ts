import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {RouterModule} from '@angular/router';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MainPageComponent}]),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {
}
