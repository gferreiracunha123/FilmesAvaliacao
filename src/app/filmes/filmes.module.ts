import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilmeModule } from './filme/filme.module';
import { FilmeListModule } from './filme-list/filme-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';



@NgModule({
  imports: [
      HttpClientModule
    , CommonModule
    , FilmeListModule
    , FilmeModule
    , DarkenOnHoverModule
    , CardModule]
})
export class FilmesModule { }
