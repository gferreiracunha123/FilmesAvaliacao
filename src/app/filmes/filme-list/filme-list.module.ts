import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilmesComponent } from '../filme-list/filmes/filmes.component';
import { FilmeListComponent } from './filme-list.component';
import { FilterByDescription } from './filme-by-description.pipe';
import { FilmeModule } from '../filme/filme.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
    declarations: [
        LoadButtonComponent
        , FilmesComponent
        , FilmeListComponent
        , FilterByDescription
        , SearchComponent],
    exports: [
        FilmeListComponent
    ],
    imports: [
        CommonModule
        , FilmeModule
        , CardModule
        , DarkenOnHoverModule
    ]
})
export class FilmeListModule { }
