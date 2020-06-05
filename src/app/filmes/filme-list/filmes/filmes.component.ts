import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Filmes} from "../../filmes";

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements  OnChanges {


  @Input() filmes: Filmes[] = [];
  rows: Filmes[] = [];


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filmes) {
      this.rows = this.getGroupColuns(this.filmes);
    }
  }


  getGroupColuns(filmes: Filmes[]) {
    const newRows = [];
    for (let index = 0; index < filmes.length; index += 3) {
      newRows.push(filmes.slice(index, index + 3));
    }
    return newRows;
  }



}
