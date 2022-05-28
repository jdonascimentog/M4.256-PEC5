import { PokemonItem } from './pokemon-item';

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
}
