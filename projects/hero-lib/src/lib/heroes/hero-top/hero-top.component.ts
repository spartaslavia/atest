import { Component, inject } from '@angular/core';
import { HeroService } from '../../hero.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LongNameDirective } from '../../share/long-name.directive';

@Component({
  selector: 'lib-hero-top',
  standalone: true,
  imports: [CommonModule, LongNameDirective],
  templateUrl: './hero-top.component.html',
  styleUrl: './hero-top.component.scss',
})
export class HeroTopComponent {
  private readonly count = 4;
  private readonly heroService = inject(HeroService);
  private readonly router = inject(Router);

  heroes$ = this.heroService.getHeroes(this.count);

  select(val: number) {
    this.router.navigate(['details', val]);
  }
}
