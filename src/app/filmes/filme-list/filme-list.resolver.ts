import { ResolveStart, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FilmeService } from '../filme/filme.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Filmes} from "../filmes";

@Injectable({ providedIn: 'root' })
export class FilmeListResolver implements Resolve<Observable<Filmes[]>> {

    constructor(private service: FilmeService) { }
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Filmes[]> {
        const userName=route.params.nomeUsuario;
        return this.service.listFromUserPaginated(userName,1);
    }
}
