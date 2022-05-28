import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon!: PokemonDetail;
  showDetail: boolean = false;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifierName =
      this.activatedRoute.snapshot.paramMap.get('name') ?? '';
    this.dataService
      .getPokemonByName(identifierName)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  showDetails(): void {
    this.showDetail = true;
  }

  hideDetails(): void {
    this.showDetail = false;
  }
}
