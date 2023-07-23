import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { LibrosPageComponent } from './pages/libros-page/libros-page.component';
import { CrearLibroPageComponent } from './pages/crear-libro-page/crear-libro-page.component';
import { EditarLibroPageComponent } from './pages/editar-libro-page/editar-libro-page.component';
import { EliminarLibroPageComponent } from './pages/eliminar-libro-page/eliminar-libro-page.component';

const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/admin/libros"
  },
  { path: 'admin/libros', component: LibrosPageComponent },
  { path: 'admin/libros/crear', component: CrearLibroPageComponent },
  { path: 'admin/libros/:id/editar', component: EditarLibroPageComponent },
  { path: 'admin/libros/:id/eliminar', component: EliminarLibroPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LibrosPageComponent,
    CrearLibroPageComponent,
    EditarLibroPageComponent,
    EliminarLibroPageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
