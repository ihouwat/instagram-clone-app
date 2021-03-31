import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { PostTileComponent } from './post-tile/post-tile.component';
import { PostsGridComponent } from './posts-grid/posts-grid.component';

import { NgPipesModule } from 'ngx-pipes';

// import carbon design modules
import { FavoriteFilledModule, ChatModule } from '@carbon/icons-angular';
import { TilesModule, LinkModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    PostTileComponent, 
    PostsGridComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FavoriteFilledModule,
    ChatModule,
    TilesModule,
    LinkModule,
    NgPipesModule
  ],
  exports: [
    PostsGridComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PostsModule { }
