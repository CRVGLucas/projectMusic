import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistsService } from './artists.service';
import { CreateArtistComponent } from './create-artist/create-artist.component';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: any = [];
  constructor(private artistsService: ArtistsService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.getArtists()
  }

  getArtists(){
    this.artistsService.getArtists().subscribe(artists => this.artists = artists );
  }

  openCreateArtistModal(){
    const modalRef = this.modal.open(CreateArtistComponent, {
      backdrop: false
    })

    modalRef.result.then(() => {
      console.log("artista cadastrado com sucesso!");
      this.getArtists();
    })

  }

}
