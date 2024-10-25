import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTopComponent } from './hero-top.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HeroTopComponent', () => {
  let component: HeroTopComponent;
  let fixture: ComponentFixture<HeroTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTopComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
