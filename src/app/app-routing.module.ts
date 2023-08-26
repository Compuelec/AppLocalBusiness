import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./module/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./module/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product-view',
    loadChildren: () => import('./module/pages/product-view/product-view.module').then( m => m.ProductViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
