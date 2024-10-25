import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsComponent } from './hero-details.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../hero.service';
import { of } from 'rxjs';

describe('HeroDetailsComponent', () => {
  let component: HeroDetailsComponent;
  let fixture: ComponentFixture<HeroDetailsComponent>;

  const mockHero = { id: 1, name: 'Mock Hero' };

  class MockHeroService {
    getHeroById(id: number) {
      if (id === mockHero.id) {
        return of(mockHero);
      } else {
        return of(undefined);
      }
    }
  }

  const commonProviders = [
    { provide: HeroService, useClass: MockHeroService },
    { provide: Location, useValue: { back: () => {} } },
  ];

  it('should display the details of an existing hero', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailsComponent],
      providers: [
        ...commonProviders,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.form.value).toEqual(mockHero);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Mock Hero details!'
    );
  });

  it('should display "Hero not found" when hero does not exist', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailsComponent],
      providers: [
        ...commonProviders,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '999',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.form.value).toEqual({ id: null, name: '' });

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Hero not found.'
    );
  });
});
