import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping:EventEmitter<string>=new EventEmitter<string>();
  @Input() value='';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce.pipe(debounceTime(150)).subscribe(filter=>this.onTyping.emit(filter))
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
