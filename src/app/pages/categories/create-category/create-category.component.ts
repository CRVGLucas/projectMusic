import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) { }
  formCreateCategory: FormGroup | any;

  ngOnInit(): void {
    this.formCreateCategory = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }
  createCategory(){
    this.categoriesService.createCategory(this.formCreateCategory.value).subscribe(
      (result) => {
        console.log("Cadastro realizado com sucesso !")
        this.formCreateCategory.reset()
      },
      (error) => {
        console.log("Deu pau: ", error)
      } 
    )
  }

}
