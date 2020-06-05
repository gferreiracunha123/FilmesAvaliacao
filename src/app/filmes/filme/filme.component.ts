import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() title = 'teste';

  @Input() description = 'teste';
  // tslint:disable-next-line: max-line-length
  @Input() url = '';


  constructor() { }

  ngOnInit() {
  }

}
