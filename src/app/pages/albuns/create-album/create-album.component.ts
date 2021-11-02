import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  formCreateAlbum: FormGroup | any;
  tracksList: any = []
  constructor(private modal: NgbActiveModal) { 
    this.formCreateAlbum = new FormGroup({
      name: new FormControl('', Validators.required),
      tracks: new FormControl([], Validators.required),
      artist_id: new FormControl([], Validators.required),
      category_id: new FormControl('', Validators.required),
      year_created: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    })
  }
  ngOnInit(): void {}
  createAlbum(){

  }
  closeModal(){
    this.modal.close()
  }

}
