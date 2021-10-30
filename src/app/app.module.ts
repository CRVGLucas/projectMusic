import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { CreateArtistComponent } from './pages/artists/create-artist/create-artist.component';
import { DiscographyComponent } from './pages/artists/discography/discography.component';
import { ArtistInfoComponent } from './pages/artists/artist-info/artist-info.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbunsComponent } from './pages/albuns/albuns.component';
import { AlbumDetailComponent } from './pages/albuns/album-detail/album-detail.component';
import { CreateAlbumComponent } from './pages/albuns/create-album/create-album.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngb-modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateArtistComponent,
    DiscographyComponent,
    ArtistInfoComponent,
    ArtistsComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    AlbunsComponent,
    AlbumDetailComponent,
    CreateAlbumComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
