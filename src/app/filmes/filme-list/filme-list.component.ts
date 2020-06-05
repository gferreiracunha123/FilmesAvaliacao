import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {FilmeService} from '../filme/filme.service';
import {Filmes} from "../filmes";
import {error} from "util";

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  title: string = '';
  filmes: Filmes[] = [];
  hasMore: boolean = false;
  currentPage: number = 1;
  userName: string = '';
  filter: string = '';
  name1="Pesquisar";
  name2="Próximo";
  name3="Voltar"

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: FilmeService) {
  }

  ngOnInit() {
    this.load("")
  }

  load(title) {
    this.filmes = [];
    this.photoService.listFromUserPaginated(title, 1)
      .subscribe(filmes => {
        this.filmes = this.filmes.concat(filmes);
        if (!filmes.length)
          this.hasMore = true;
      });
  }

  next(title) {
    this.filmes = [];
    this.photoService.listFromUserPaginated(title, ++this.currentPage)
      .subscribe(filmes => {
        this.filmes = this.filmes.concat(filmes);
        if (!filmes.length)
          this.hasMore = true;
      });
  }

  previous(title) {
    this.filmes = [];
    if (this.currentPage >= 1)
      this.photoService.listFromUserPaginated(title, --this.currentPage)
        .subscribe(filmes => {
          this.filmes = this.filmes.concat(filmes);
          if (!filmes.length)
            this.hasMore = true;
        });
  }
}



