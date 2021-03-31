import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { PostTileComponent } from './post-tile/post-tile.component';

import { NgPipesModule } from 'ngx-pipes';

// import carbon design modules
import { FavoriteFilledModule, ChatModule } from '@carbon/icons-angular';
import { TilesModule, LinkModule } from 'carbon-components-angular';

@NgModule({
  declarations: [PostTileComponent],
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
    PostTileComponent
  ]
})
export class PostsModule { }
