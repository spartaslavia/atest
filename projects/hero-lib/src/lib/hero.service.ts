import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Hero } from './hero.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly http = inject(HttpClient);
  private heroesSubject$ = new BehaviorSubject<Hero[]>([]);
  private heroesLoaded = false;

  getHeroes(count = 0): Observable<Hero[]> {
    if (!this.heroesLoaded) {
      return this.http.get<Hero[]>('heroes.json').pipe(
        tap((heroes) => {
          this.heroesSubject$.next(heroes);
          this.heroesLoaded = true;
        }),
        map((heroes) => (count ? heroes.slice(0, count) : heroes))
      );
    } else {
      return this.heroesSubject$
        .asObservable()
        .pipe(
          map((heroes: Hero[]) => (count ? heroes.slice(0, count) : heroes))
        );
    }
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    return this.getHeroes().pipe(
      map((heroes) => heroes.find((hero) => hero.id === id))
    );
  }

  updateHero(updatedHero: Hero): void {
    const currentHeroes = this.heroesSubject$.value;
    const index = currentHeroes.findIndex(
      (hero: Hero) => hero.id === updatedHero.id
    );
    if (index !== -1) {
      const updatedHeroes = [...currentHeroes];
      updatedHeroes[index] = updatedHero;
      this.heroesSubject$.next(updatedHeroes);
    }
  }
}
