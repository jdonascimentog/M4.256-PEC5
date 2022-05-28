import { PokemonSprite } from './pokemon-sprite';

export interface PokemonDetail {
  height: number;
  id: number;
  name: string;
  weight: number;
  sprites: PokemonSprite;
}
