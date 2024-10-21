import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLibComponent } from './hero-lib.component';

describe('HeroLibComponent', () => {
  let component: HeroLibComponent;
  let fixture: ComponentFixture<HeroLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
