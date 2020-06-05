import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilmesModule} from './filmes/filmes.module';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageComponent} from './shared/components/vmessage/vmessage.component';
import {FilmeListModule} from "./filmes/filme-list/filme-list.module";

@NgModule({
  declarations: [
    AppComponent,
    VmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmesModule,
    ReactiveFormsModule, FilmeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
