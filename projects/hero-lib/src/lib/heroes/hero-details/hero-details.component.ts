import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeroService } from '../../hero.service';
import { ActivatedRoute } from '@angular/router';
import { LongNameDirective } from '../../share/long-name.directive';
import { Hero } from '../../hero.models';

@Component({
  selector: 'lib-hero-details',
  standalone: true,
  imports: [CommonModule, LongNameDirective, ReactiveFormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss',
})
export class HeroDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly heroService = inject(HeroService);
  private readonly fb = inject(FormBuilder);
  private readonly location = inject(Location);

  selectedId = this.route.snapshot.paramMap.get('id')!;
  hero$ = this.heroService.getHeroById(+this.selectedId);
  form: FormGroup = this.fb.group({
    id: null,
    name: ['', Validators.required],
  });

  ngOnInit() {
    this.hero$.subscribe((hero) => {
      this.form.patchValue(hero!);
    });
  }

  back() {
    this.location.back();
  }

  save() {
    if (this.form.valid) {
      const updatedHero = this.form.value as Hero;
      this.heroService.updateHero(updatedHero);
      this.back();
    }
  }
}
