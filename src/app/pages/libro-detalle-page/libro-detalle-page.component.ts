import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from "../../libros.service";
import { Autor } from "../../autor";

@Component({
  selector: 'app-libro-detalle-page',
  templateUrl: './libro-detalle-page.component.html',
  styleUrls: ['./libro-detalle-page.component.css']
})
export class LibroDetallePageComponent {
  libro: any = {}
  id:string = ""
  constructor(private route: ActivatedRoute, private librosService: LibrosService, private router: Router) {
    this.route.params?.subscribe((params: any) => {
      const id = params.id
      this.id = id
      this.librosService.getLibro(id).subscribe((libro: any) => {
        this.librosService.getAutores().subscribe(autores => {
          
          this.libro = {
            ...libro,
            ano_publicacion: libro.año_publicacion,
            autor:autores.find((autor)=>autor.id===libro.autor)?.nombre
          }
          console.log(this.libro)
        })
       })
    })
  }
}
