import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistas', loadChildren: () => import('./pages/artists/artists.module').then(module => module.ArtistsModule)},
  {path: 'categorias', loadChildren: () => import('./pages/categories/categories.module').then(module => module.CategoriesModule)},
  {path: 'albuns', loadChildren: () => import('./pages/albuns/albuns.module').then(module => module.AlbunsModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
