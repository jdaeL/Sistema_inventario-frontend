import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private httpClient:HttpClient) {

  }

  getLibros() {
    return this.httpClient.get<Libro[]>("https://dael.pythonanywhere.com/api/libros/");
  }
  createLibro(data:any){
    return this.httpClient.post<any>("https://dael.pythonanywhere.com/api/libros/", data);
  }
  getAutores() {
    return this.httpClient.get<Autor[]>("https://dael.pythonanywhere.com/api/autores/");
  }

}
