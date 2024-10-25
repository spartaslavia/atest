import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroService } from '../../hero.service';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { Hero } from '../../hero.models';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-hero-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroCardComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  private readonly heroService = inject(HeroService);
  heroes$ = this.heroService.getHeroes();
  selected!: Hero;

  select(val: Hero) {
    this.selected = val;
  }
}
