import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  pokemon: any;
  loading: boolean = true

  constructor(
    private http: HttpClient,
    private pokeApi: PokeApiService
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeApi.getPokemon().subscribe((data: any) => { 
      this.pokemon = data.results
      this.loading = false
      console.log(this.pokemon);
    });
  }

}
