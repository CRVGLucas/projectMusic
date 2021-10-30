import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories/categories.service';
import { ArtistsService } from '../artists.service';
import { ModalComponent } from 'ngb-modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})

export class CreateArtistComponent implements OnInit {
  formCreateArtist: FormGroup | any
  categories: any = []
  constructor(private activeModal: NgbActiveModal,private artistsService: ArtistsService, private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories)
  }

  ngOnInit(): void {
    this.formCreateArtist = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      category_id: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    })
  }

  createArtist(){
    console.log("Formulario aqui: ",this.formCreateArtist.value)
    this.artistsService.createArtist(this.formCreateArtist.value).subscribe(
      (result) => {
        console.log("Artista criado com sucesso !")
        this.formCreateArtist.reset()
        this.closeModal()
      },
      (error) => {
        console.log("Deu ruim ", error)
      }
    )
  }

  closeModal(){
    this.activeModal.close()
  }

}
