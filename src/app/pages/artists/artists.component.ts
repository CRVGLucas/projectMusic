import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: any = [];
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.artists = this.artistsService.getArtists().subscribe(artists => this.artists = artists );
  }

}
