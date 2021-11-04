import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegisterUser: FormGroup| any;
  constructor(private appService: AppService) { 
    this.formRegisterUser = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      image: new FormControl(''),
      date_created: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  createUser(){
    let date = new Date()
    this.appService.getUserByEmail(this.formRegisterUser.value.email).subscribe( (user: any) => {
      if(user.length > 0){
        console.log("usuário já existe")
      } else {
        this.formRegisterUser.get('id').setValue(uuidv4())  
        this.formRegisterUser.get('date_created').setValue(date)
        console.log("formulário: ", this.formRegisterUser.value)
        this.appService.createUser(this.formRegisterUser).subscribe( (result: any) => {
          
        })
      }
    })
  }

}
