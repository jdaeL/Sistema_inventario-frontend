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
  constructor(private route: ActivatedRoute, private librosService: LibrosService, private router: Router){
    this.route.params?.subscribe((params: any) => {
      const id=params.id
    })
  }  
}
