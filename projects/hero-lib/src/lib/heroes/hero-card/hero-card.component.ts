import { Component, Input } from '@angular/core';
import { Hero } from '../../hero.models';
import { CommonModule } from '@angular/common';
import { LongNameDirective } from '../../share/long-name.directive';

@Component({
  selector: 'lib-hero-card',
  standalone: true,
  imports: [CommonModule, LongNameDirective],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Input() isSelected = false;
}
