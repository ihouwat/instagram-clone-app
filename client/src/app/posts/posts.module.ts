import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { PostTileComponent } from './post-tile/post-tile.component';
import { PostsGridComponent } from './posts-grid/posts-grid.component';

import { NgPipesModule } from 'ngx-pipes';

// import carbon design modules
import { FavoriteFilledModule, ChatModule, FavoriteModule } from '@carbon/icons-angular';
import { TilesModule, LinkModule, InputModule } from 'carbon-components-angular';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    PostTileComponent, 
    PostsGridComponent, PostPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FavoriteFilledModule,
    ChatModule,
    TilesModule,
    InputModule,
    LinkModule,
    FavoriteModule,
    NgPipesModule
  ],
  exports: [
    PostsGridComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PostsModule { }
