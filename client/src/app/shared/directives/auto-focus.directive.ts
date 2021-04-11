import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: "[focusInput]"
})

/*
  This directive ensures any input element with a'focusInput'
  selector automatically focuses on initialization
*/

export class AutoFocusDirective implements OnInit {
  private inputElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.inputElement.focus();
  }
}