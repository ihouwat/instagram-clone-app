import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

// import custom components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchBoxComponent } from './header-search-box/header-search-box.component';
import { SearchResultsAttributeDirective } from './search-results-attr.directive';
import { UserSearchResultsComponent } from './user-search-results/user-search-results.component';
import { UserSearchResultsComponent2 } from './user-search-results-2/user-search-results.component-2';
import { UserSearchService } from './user-search.service';

// import carbon design modules
import {SearchModule, ButtonModule, DialogModule} from 'carbon-components-angular';
import {HomeModule, SendAltModule, AddAltModule, UserAvatarModule, 
  LogoGithubModule, LogoTwitterModule, LogoLinkedinModule} from '@carbon/icons-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderSearchBoxComponent,
    UserSearchResultsComponent,
    SearchResultsAttributeDirective,
    UserSearchResultsComponent2
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SearchModule,
    ButtonModule,
    HomeModule, 
    SendAltModule, 
    AddAltModule,
    UserAvatarModule,
    LogoGithubModule,
    LogoTwitterModule,
    LogoLinkedinModule,
    DialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderSearchBoxComponent,
    UserSearchResultsComponent,
    SearchResultsAttributeDirective,
    UserSearchResultsComponent2
  ],
  providers: [UserSearchService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavigationModule { }
