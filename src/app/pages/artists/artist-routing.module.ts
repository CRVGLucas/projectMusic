import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { ArtistsComponent } from './artists.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { DiscographyComponent } from './discography/discography.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListArtistsComponent
      },
      {
        path: 'criar',
        component: CreateArtistComponent
      },
      {
        path: 'info/:id',
        component: ArtistInfoComponent
      },
      {
        path: 'discografia/:id',
        component: DiscographyComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
