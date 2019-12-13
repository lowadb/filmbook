import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  autoCompleteForm = new FormGroup({
    query: new FormControl('')
  });
  completions: any[] = [1, 2, 3];

  constructor() {
  }

  ngOnInit() {
  }

}
