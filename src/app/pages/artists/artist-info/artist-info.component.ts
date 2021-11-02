import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateAlbumComponent } from '../../albuns/create-album/create-album.component';
import { CategoriesService } from '../../categories/categories.service';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  artist: any; 
  categories: any = [];

  constructor(private route: ActivatedRoute, private artistService: ArtistsService, private categoryServices: CategoriesService, private modal: NgbModal ) { 
    this.categoryServices.getCategories().subscribe( categories => this.categories = categories)
  }

  getArtist(){
    let id: any = this.route.snapshot.paramMap.get('id')
    this.artistService.getArtistByID(id).subscribe((artist: any) => this.artist = artist[0])
  }

  ngOnInit(): void {
    this.getArtist();
  }

  createAlbumArtist(){
    this.modal.open(CreateAlbumComponent, {})
  }

}
