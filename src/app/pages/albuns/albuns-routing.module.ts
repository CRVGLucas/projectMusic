import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbunsComponent } from './albuns.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
const routes: Routes = [
  {path: '', component: AlbunsComponent, children: [
    {path: 'criar', component: CreateAlbumComponent},
    {path: 'info/:id', component: AlbumDetailComponent},
  ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
