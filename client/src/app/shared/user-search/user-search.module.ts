import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchComponent } from './user-search-component/user-search.component'
import { UserSearchService } from './user-search.service'
import { AutoFocusDirective } from './user-search-directives/auto-focus.directive'
import { SearchResultsAttributeDirective } from './user-search-directives/search-results-attr.directive'

// carbon components and modules
import { DialogModule } from 'carbon-components-angular'

@NgModule({
  declarations: [
    UserSearchComponent,
    AutoFocusDirective,
    SearchResultsAttributeDirective,
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  providers: [UserSearchService],
  exports: [
    UserSearchComponent,
    AutoFocusDirective,
    SearchResultsAttributeDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
})

export class UserSearchModule { }