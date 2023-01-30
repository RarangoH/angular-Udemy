import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes=[
  {
    path:'auth',
    //LazyLoad: Cuando alguien entra al path auth, carga sus hijos. Y estos hijos o modulo hijo va a venir
    //producto del auth module.
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroe',
    loadChildren:() => import('./heroes/heroes.module').then(m=>m.HeroesModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
