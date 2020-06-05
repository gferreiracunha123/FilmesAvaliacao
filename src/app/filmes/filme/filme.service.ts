import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Filmes} from "../filmes";

const API = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class FilmeService {

  constructor(private http: HttpClient) {
  }

  listFromUserPaginated(title: string, page: number) {
    const paginations = new HttpParams().append('page', page.toString())
    return this.http
      .get<Filmes[]>(API + '/filmes?Title=' + title, {params: paginations});
  };

}
