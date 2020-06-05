import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeComponent } from './filme.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FilmeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FilmeComponent]
})
export class FilmeModule { }
