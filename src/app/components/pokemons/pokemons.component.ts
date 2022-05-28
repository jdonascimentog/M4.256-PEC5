import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonList } from 'src/app/models/pokemon-list';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  animations: [
    trigger('cardsAnimation', [
      state('waiting', style({ opacity: 1 })),
      state('loaded', style({ opacity: 1 })),
      transition('waiting => loaded', [
        query('.post_card', [
          style({ opacity: 0, transform: 'translateX(-300px)' }),
          stagger(500, [
            animate(
              '1500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class PokemonsComponent implements OnInit {
  processing: boolean = true;
  animationState!: string;
  pokemonList!: PokemonList;
  constructor(private dataService: DataService, private router: Router) {
    this.animationState = 'waiting';
  }

  ngOnInit(): void {
    this.dataService.getAllPokemons().subscribe((list) => {
      this.pokemonList = list;
      this.processing = false;
      this.animationState = 'loaded';
    });
  }

  goTo(name: string) {
    this.router.navigateByUrl('/pokemon/' + name);
  }
}
