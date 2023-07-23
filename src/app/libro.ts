export interface Libro {
    id: number,
    titulo: string,
    año_publicacion: number,
    precio: number,
    imagen: string,
    descripcion: string,
    stock: number,
    firmado: boolean,
    hay_envio_gratis: boolean,
    autor: number
}