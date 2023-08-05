import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from "../../libros.service";
import { Autor } from "../../autor";

@Component({
  selector: 'app-editar-libro-page',
  templateUrl: './editar-libro-page.component.html',
  styleUrls: ['./editar-libro-page.component.css']
})
export class EditarLibroPageComponent {
  libro: any = {}
  autores: Autor[] = []
  id:string = ""
  constructor(private route: ActivatedRoute, private librosService: LibrosService, private router: Router) {
    this.route.params?.subscribe((params: any) => {
      const id = params.id
      this.id = id
      this.librosService.getLibro(id).subscribe((libro: any) => {
        this.libro = {
          ...libro,
          ano_publicacion: libro.año_publicacion
        }
      })
    })
    this.librosService.getAutores().subscribe(autores => {
      this.autores = autores;
    })
  }
  editarLibro(titulo: any,
    ano_publicacion: any,
    precio: any,
    imagen: any,
    descripcion: any,
    stock: any,
    firmado: any,
    hay_envio_gratis: any,
    autor: any): boolean {


    const data = {
      titulo: titulo.value,
      año_publicacion: Number.parseInt(ano_publicacion.value),
      precio: Number.parseInt(precio.value),
      imagen: imagen.value,
      descripcion: descripcion.value,
      stock: Number.parseInt(stock.value),
      firmado: firmado.checked,
      hay_envio_gratis: hay_envio_gratis.checked,
      autor: Number.parseInt(autor.value),
    }
    console.log(data)
    this.librosService.editarLibro(this.id, data).subscribe(result => {
      this.router.navigate(["/admin/libros"]);
    })
    return false;

  }
}


