import { Directive, ElementRef, HostListener } from '@angular/core'
import { UserSearchService } from '../user-search.service';

@Directive({
  selector: "[toggleSearchResults]"
})

/*
  This directive ensures any element with a'toggleSearchResults'
  toggles the appearance of the UserSearchComponent results menu
*/

export class ToggleResultsDisplayDirective {

  // Flag to toggle appearance of overflow menu
  menuIsOpen:boolean = false;

  @HostListener('click', ['$event.path'])
  clickHandler(eventPath:Array<any>) {

    // If you click on search input and results menu is not open, open it
    if(this.menuIsOpen === false) {
      this.usrSearchService.openSearchResults();
      this.toggleMenuIsOpen();
    }

    // If results menu is open and you click on a list result item, close the menu
    if(this.menuIsOpen === true && eventPath.some(e => e?.classList?.contains('search-result-list-item'))) {
      this.usrSearchService.closeSearchResults();
      this.toggleMenuIsOpen();
    }
    
    // Go to global click handler method
    else this.checkClickOut
  }

  @HostListener('document:click', ['$event']) 
  checkClickOut(event:Event) {
    // If the click event is outside the elementRef, close the results menu
    if (this.menuIsOpen && !this.elementRef?.nativeElement?.contains(event.target)) {
      this.usrSearchService.closeSearchResults();
      this.toggleMenuIsOpen();
    }
  }

  // Toggle the menuIsOpen flag
  toggleMenuIsOpen() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  constructor(
    private elementRef: ElementRef,
    private usrSearchService:UserSearchService) {

    this.clickHandler  
  }

}