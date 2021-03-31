import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed/news-feed.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'


const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
  { 
    // TODO: implement user route that automatically redirects to username
    // Ex: '/igor' and NOT '/user/igor'
    path: 'user/:username',
    loadChildren: () => import('./user-feed/user-feed-routing.module').then(m => m.UserFeedRoutingModule)
  },
  { path: 'home', component: NewsFeedComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo:'404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
