export class ProductsOrden {
    id: string;
    nombre: string;
    precio: number;
    cantidad: number;
    imagen: string;

    constructor(id: string, nombre: string, precio: number, cantidad: number, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}


