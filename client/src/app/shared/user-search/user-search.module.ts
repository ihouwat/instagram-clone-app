import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchComponent } from './user-search-component/user-search.component'
import { AutoFocusDirective } from './user-search-directives/auto-focus.directive'
import { ToggleResultsDisplayDirective } from './user-search-directives/toggle-results-display.directive'

// carbon components and modules
import { DialogModule } from 'carbon-components-angular'

@NgModule({
  declarations: [
    UserSearchComponent,
    AutoFocusDirective,
    ToggleResultsDisplayDirective
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    UserSearchComponent,
    AutoFocusDirective,
    ToggleResultsDisplayDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
})

export class UserSearchModule { }