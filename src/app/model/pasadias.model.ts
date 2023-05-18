export class Pasadias {
    identificacion: number;
    nombre: string;
    apellido: string;
    servicio: string;
    dias: number;
    fecha_inicio: Date;
    numeroPersonas: number;
    precio: number;
    
    constructor(identificacion: number, nombre: string, apellido: string, servicio: string, dias: number, fecha_inicio: Date, numeroPersonas: number, precio: number) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.servicio = servicio;
        this.dias = dias;
        this.fecha_inicio = fecha_inicio;
        this.numeroPersonas = numeroPersonas;
        this.precio = precio;
    }
}
