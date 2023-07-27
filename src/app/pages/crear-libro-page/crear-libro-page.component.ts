import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-libro-page',
  templateUrl: './crear-libro-page.component.html',
  styleUrls: ['./crear-libro-page.component.css']
})
export class CrearLibroPageComponent {
    addLibro(titulo: any,
      ano_publicacion: any,
      precio: any,
      imagen: any,
      descripcion: any,
      stock: any,
      firmado: any,
      hay_envio_gratis: any,
      autor: any):boolean{
    return false;
  }
}
