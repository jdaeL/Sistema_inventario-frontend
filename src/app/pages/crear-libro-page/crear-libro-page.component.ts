import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibrosService } from "../../libros.service";
import { Autor } from "../../autor";
@Component({
  selector: 'app-crear-libro-page',
  templateUrl: './crear-libro-page.component.html',
  styleUrls: ['./crear-libro-page.component.css']
})
export class CrearLibroPageComponent {
  autores: Autor[]=[]
  constructor(private librosService: LibrosService, private router: Router){
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

 
const data = {
  titulo:titulo.value,
  año_publicacion:Number.parseInt(ano_publicacion.value),
  precio:Number.parseInt(precio.value),
  imagen:imagen.value,
  descripcion:descripcion.value,
  stock:Number.parseInt(stock.value),
  firmado:firmado.checked,
  hay_envio_gratis:hay_envio_gratis.checked,
  autor:Number.parseInt(autor.value),
}
console.log(data)
        this.librosService.createLibro(data).subscribe(result => {
          this.router.navigate(["/admin/libros"]);
        })
    return false;

  }
}

