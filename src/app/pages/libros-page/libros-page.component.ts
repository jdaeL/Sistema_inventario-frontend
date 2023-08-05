import { Component } from '@angular/core';
import { LibrosService } from '../../libros.service';
import { Libro } from '../../libro';
import { Autor } from '../../autor';

@Component({
  selector: 'app-libros-page',
  templateUrl: './libros-page.component.html',
  styleUrls: ['./libros-page.component.css']
})
export class LibrosPageComponent {

    libros:any[] = []
    constructor(private librosService: LibrosService){

      this.librosService.getAutores().subscribe(autores => {
        this.librosService.getLibros().subscribe(libros => {
          this.libros = libros.map(libro => ({
            ...libro,
            fecha:libro.año_publicacion, 
            autor:autores.find(autor => autor.id===libro.autor)?.nombre
          }));
        })
      });
    }
    
    eliminarLibro(id: any) {
      console.log("id :]", id)
    }
}
