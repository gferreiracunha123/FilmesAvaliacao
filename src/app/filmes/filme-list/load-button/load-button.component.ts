import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore = false;
  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
