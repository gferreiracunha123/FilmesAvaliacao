import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeListResolver } from './filmes/filme-list/filme-list.resolver';


const routes: Routes = [
  { path: '', component: FilmeListComponent,resolve:{filme:FilmeListResolver} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
