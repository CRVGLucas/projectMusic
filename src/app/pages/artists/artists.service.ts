import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) { }
  getArtists(): Observable<any>{
    return this.http.get('http://localhost:3000/artists')
  }
  getArtistByName(name: string){
    return this.http.get(`http://localhost:3000/artists?name=${name}`)
  }
  getArtistByID(id: string){
    return this.http.get(`http://localhost:3000/artists?id=${id}`)
  }
  createArtist(params: any){
    let id = uuidv4()
    params.id = id
    return this.http.post('http://localhost:3000/artists', params, {})
  }
}
