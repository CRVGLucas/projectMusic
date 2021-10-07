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
    CreateCategoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
