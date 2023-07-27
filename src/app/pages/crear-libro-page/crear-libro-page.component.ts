import { Component } from '@angular/core';
import { LibrosService } from "../../libros.service";
import { Autor } from "../../autor";
@Component({
  selector: 'app-crear-libro-page',
  templateUrl: './crear-libro-page.component.html',
  styleUrls: ['./crear-libro-page.component.css']
})
export class CrearLibroPageComponent {
  autores: Autor[]=[]
  constructor(private librosService: LibrosService){
    this.librosService.getAutores().subscribe(autores => {
      this.autores = autores;
    })
  }  
  addLibro(titulo: any,
      ano_publicacion: any,
      precio: any,
      imagen: any,
      descripcion: any,
      stock: any,
      firmado: any,
      hay_envio_gratis: any,
      autor: any):boolean{

        console.log(titulo.value, firmado.checked, autor.value)
    return false;
  }
}
