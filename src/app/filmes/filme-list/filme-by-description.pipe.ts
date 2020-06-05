import {Pipe, PipeTransform} from '@angular/core';
import {Filmes} from "../filmes";
import {FilmeService} from "../filme/filme.service";
import {queriesFromFields} from "@angular/compiler-cli/src/ngtsc/annotations/src/directive";

@Pipe({name: 'filterbyDescription'})
export class FilterByDescription implements PipeTransform {
  constructor(public photoService:FilmeService) {

  }

  transform(filmes: Filmes[], descriptionsQuery: string) {
    descriptionsQuery = descriptionsQuery.trim().toLowerCase();
    if (descriptionsQuery) {
      return filmes.filter(filme =>
        filme.Title.toLowerCase().includes(descriptionsQuery));
    } else {
      return filmes;
    }
  }
}
