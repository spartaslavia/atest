import { Routes } from '@angular/router';
import { HeroTopComponent } from '../../../hero-lib/src/lib/heroes/hero-top/hero-top.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroTopComponent,
  },
  {
    path: 'heroes',
    loadComponent: () =>
      import(
        '../../../hero-lib/src/lib/heroes/hero-list/hero-list.component'
      ).then((m) => m.HeroListComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import(
        '../../../hero-lib/src/lib/heroes/hero-details/hero-details.component'
      ).then((m) => m.HeroDetailsComponent),
  },
];
