import { Directive, ElementRef, HostListener, OnInit } from '@angular/core'
import { UserSearchService } from '../user-search.service';

@Directive({
  selector: "[searchInput]"
})

/*
  This directive ensures any input element with a'focusInput'
  selector automatically focuses on initialization
*/

export class ToggleResultsDisplayDirective implements OnInit {

  
  get getSearchResultsDisplay():boolean {
    return this.usrSearchService.searchResultDispStatus;
  }

  @HostListener('window:click', ['$event'])
  listen(e:Event) {
    
    console.log(this.elementRef.nativeElement);
    
    if(this.elementRef?.nativeElement.contains(e.target)) {
      this.toggleDisplay();
    }

    // if(!this.elementRef?.nativeElement.contains(e.target)) {
    //   this.usrSearchService.closeSearchResults();
    // }

  }

  toggleDisplay() {
   !this.getSearchResultsDisplay 
    ? this.usrSearchService.openSearchResults()
    : this.usrSearchService.closeSearchResults()
  }

  constructor(
    private elementRef: ElementRef,
    private usrSearchService:UserSearchService) {

    this.listen
    this.getSearchResultsDisplay
  
  }

  ngOnInit (): void {}
}