import { Directive, ElementRef, HostListener } from '@angular/core'
import { UserSearchService } from '../user-search.service';

@Directive({
  selector: "[searchInput]"
})

/*
  This directive ensures any input element with a'focusInput'
  selector automatically focuses on initialization
*/

export class ToggleResultsDisplayDirective {

  overflowMenuClass:string = "search-results-display";
  listItemResult:string = "search-result-list-item";
  menuIsOpen:boolean = false;

  get getSearchResultsDisplay():boolean {
    return this.usrSearchService.searchResultDispStatus;
  }

  @HostListener('click', ['$event, $event.path'])
  clickHandler(event:Event, eventPath:Array<any>):any {
    
    let closeMenu:boolean = this.checkCloseOverflowMenu(eventPath);

    if (closeMenu === true) {
      this.menuIsOpen = false;
      this.usrSearchService.closeSearchResults();
    }

    else if(
        closeMenu === false 
        && this.elementRef?.nativeElement.contains(event.target)
        && !this.elementRef?.nativeElement?.classList?.contains(this.overflowMenuClass)) {
          this.toggleDisplay();
          event.stopImmediatePropagation()
    }
    
    else this.checkClickOut
  }

  @HostListener('document:click', ['$event.path']) 
  checkClickOut(eventPath:Array<any>) {
    if (this.menuIsOpen && !eventPath.some(e => e?.classList?.contains(this.overflowMenuClass))) {
      this.usrSearchService.closeSearchResults();
    }
  }

  checkCloseOverflowMenu(eventPath:Array<any>):boolean {
    let listItem = eventPath.some(e => e?.classList?.contains(this.listItemResult))
    let overflowMenu = eventPath.some(e => e?.classList?.contains(this.overflowMenuClass))

    if (listItem && overflowMenu) return true
    else return false
  }


  toggleDisplay() {
    if(!this.getSearchResultsDisplay) {
      this.usrSearchService.openSearchResults();
      this.menuIsOpen = true;
    }
    else {
      this.usrSearchService.closeSearchResults();
      this.menuIsOpen = false;
    }
  }

  constructor(
    private elementRef: ElementRef,
    private usrSearchService:UserSearchService) {
    this.clickHandler
    this.getSearchResultsDisplay
  
  }

}