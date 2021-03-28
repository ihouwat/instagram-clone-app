import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'


const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
  { 
    // TODO: implement user route that automatically redirects to username
    // Ex: '/igor' and NOT '/user/igor'
    path: ':username',
    loadChildren: () => import('./user-feeds/user-feeds-routing.module').then(m => m.UserFeedsRoutingModule)
  },
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
