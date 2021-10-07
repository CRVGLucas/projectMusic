import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { ArtistsComponent } from './artists.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { DiscographyComponent } from './discography/discography.component';
const routes: Routes = [
  {path: '', component: ArtistsComponent, children: [
    {path: 'criar', component: CreateArtistComponent},
    {path: 'info/:id', component: ArtistInfoComponent},
    {path: 'discografia/:id', component: DiscographyComponent}
  ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
