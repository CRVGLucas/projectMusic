import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtistsService } from './artists.service';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CategoriesService } from '../categories/categories.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  formSearchArtist: FormGroup | any
  artists: any = [];
  constructor(private artistsService: ArtistsService, private categoryService: CategoriesService,private modal: NgbModal) { 
    this.formSearchArtist = new FormGroup({
      search: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getArtists()
  }

  getArtists(){
    this.artistsService.getArtists().subscribe(artists => {
      this.artists = artists
      this.artists.map( (artist: any) => {
        this.categoryService.getCategoryByID(artist.category_id).subscribe(
          (categoryResult: any) => artist.category = categoryResult.name
        )
      })
    })
  }

  searchArtist(){
    this.artistsService.getArtistByName(this.formSearchArtist.value.search).subscribe((artist: any) => {
      if(artist.length > 0){
        this.artists = artist
      } else {
        this.getArtists()
      }
    })
  }

  getCategoryByID(id: any){
    let category: any = '';
    console.log('categoria: ', category)
    return category
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
