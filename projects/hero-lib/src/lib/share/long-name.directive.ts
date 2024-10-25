import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[libLongName]',
  standalone: true,
})
export class LongNameDirective implements OnInit {
  @Input('libLongName') name!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.name && this.name.length > 10) {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}
