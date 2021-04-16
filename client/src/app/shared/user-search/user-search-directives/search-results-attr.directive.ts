import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[searchResultsLocation]'
})
export class SearchResultsAttributeDirective implements AfterViewInit {

  // An attribute directive that styles the UserSearchResultsComponent
  
  element: HTMLElement = this.elRef.nativeElement;
  @Input("searchResultsLocation") searchResultsLocation!:string;

  /* 
    Conditionally add styles to the UserSearchResultsComponent
    based on where they are located
    @param {HTMLElement} elem Component identified by selector.
    @param {string} str Location of the element 
  */
 
  addClass(elem:HTMLElement, str:string) {
    return this.renderer.addClass(elem, `${str}-location`);
  }

  constructor(
    private elRef:ElementRef,
    private renderer:Renderer2) {}

  ngAfterViewInit(): void {
    this.addClass(this.element, this.searchResultsLocation);
  }

}
