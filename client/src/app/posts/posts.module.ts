import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { PostTileComponent } from './post-tile/post-tile.component';

// import carbon design modules
import { FavoriteFilledModule, ChatModule } from '@carbon/icons-angular';
import { TilesModule } from 'carbon-components-angular';

@NgModule({
  declarations: [PostTileComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FavoriteFilledModule,
    ChatModule,
    TilesModule,
  ],
  exports: [
    PostTileComponent
  ]
})
export class PostsModule { }
