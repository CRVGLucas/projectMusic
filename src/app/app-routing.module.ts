import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas', loadChildren: () => import('./pages/artists/artists.module').then(module => module.ArtistsModule)},
  {path: 'categorias', loadChildren: () => import('./pages/categories/categories.module').then(module => module.CategoriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
