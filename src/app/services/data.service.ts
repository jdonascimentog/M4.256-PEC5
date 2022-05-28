import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../models/pokemon-detail';
import { PokemonList } from '../models/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<PokemonList> {
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(
      'https://pokeapi.co/api/v2/pokemon/' + name
    );
  }
}
