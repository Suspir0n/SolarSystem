import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'earth',
    loadChildren: () => import('./earth/earth.module').then( m => m.EarthPageModule)
  },
  {
    path: 'pluto',
    loadChildren: () => import('./pluto/pluto.module').then( m => m.PlutoPageModule)
  },
  {
    path: 'neptune',
    loadChildren: () => import('./neptune/neptune.module').then( m => m.NeptunePageModule)
  },
  {
    path: 'mercury',
    loadChildren: () => import('./mercury/mercury.module').then( m => m.MercuryPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./venus/venus.module').then( m => m.VenusPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
  {
    path: 'saturn',
    loadChildren: () => import('./saturn/saturn.module').then( m => m.SaturnPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
