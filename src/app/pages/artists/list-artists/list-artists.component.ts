import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Artists } from 'src/app/core/models/artists';
import { CategoriesService } from '../../categories/categories.service';
import { ArtistsService } from '../artists.service';
import { CreateArtistComponent } from '../create-artist/create-artist.component';


@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.scss']
})
export class ListArtistsComponent implements OnInit {


  formSearchArtist: FormGroup = new FormGroup({});
  artists: Artists[] = [];
  artistsCopy: Artists[] = [];

  constructor(
    private artistsService: ArtistsService,
    private categoryService: CategoriesService,
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.formSearchArtist = new FormGroup({
      search: new FormControl('')
    })

    this.getArtists()
  }

  getArtists() {
    this.artistsService.getArtists().subscribe(artists => {
      this.artists = artists;
      this.artistsCopy = artists;
      this.artists.map((artist: Artists) => {
        this.categoryService.getCategoryByID(artist.category_id).subscribe(
          (categoryResult: any) => artist.category = categoryResult.name
        )
      })
    })
  }

  searchArtist(event: any) {
    console.log(event.target.value)
    let termo = event.target.value
    let terms = termo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    this.artistsCopy = this.artists.filter((artist: any) => {
      if (artist.name.toLowerCase().includes(terms.toLowerCase())) {
        return artist;
      }
    });

    // this.artistsService.getArtistByName(terms).subscribe((artist: any) => {
    //   if (artist.length > 0) {
    //     this.artists = artist
    //   } else {
    //     this.getArtists()
    //   }
    // })
  }

  getCategoryByID(id: any) {
    let category: any = '';
    console.log('categoria: ', category)
    return category
  }

  openCreateArtistModal() {
    const modalRef = this.modal.open(CreateArtistComponent, {
      backdrop: false
    })
    modalRef.result.then(() => {
      console.log("artista cadastrado com sucesso!");
      this.getArtists();
    })
  }
}
