import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private readonly BASE_URI = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  getPokemon() {
   return this.http.get(`${this.BASE_URI}pokemon?limit=964`)
  }

}
