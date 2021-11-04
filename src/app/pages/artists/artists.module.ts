import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsRoutingModule } from './artist-routing.module';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArtistsModule { }
