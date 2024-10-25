import { ElementRef } from '@angular/core';
import { LongNameDirective } from './long-name.directive';

describe('LongNameDirective', () => {
  let elementRef: ElementRef;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('div'));
  });

  it('should create an instance', () => {
    const directive = new LongNameDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
