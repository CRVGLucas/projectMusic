import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: any){
    return this.http.get(`http://localhost:3000/user?email=${email}`)
  }

  createUser(params: any){
    return this.http.post(`http://localhost:3000/user`,params,{})
  }
}
