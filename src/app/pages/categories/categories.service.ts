import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  getCategories(){
    return this.http.get('http://localhost:3000/categories')
  }
  getCategoryByName(name: string){
    return this.http.get(`http://localhost:3000/categories?name=${name}`)
  }
  getCategoryByID(id: string){
    return this.http.get(`http://localhost:3000/categories?id=${id}`)
  }
  createCategory(params: any){
    let id = uuidv4()
    params.id = id
    return this.http.post('http://localhost:3000/categories', params, {});
  }
}
