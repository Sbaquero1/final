export class Alquiler {
    identificacion: number;
    nombres: string;
    apellidos: string;
    fechaInicio: Date;
    fechaFin: Date;
    dias: number;
    estado: string;
    valor: number;
    espacioAlquilado: string;
    tipoEvento: string;
    numeroPersonas: number;
    constructor(identificacion: number, nombres: string, apellidos: string, fechaInicio: Date, fechaFin: Date, dias: number, estado: string, valor: number, espacioAlquilado: string, tipoEvento: string, numeroPersonas: number) {
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.dias = dias;
        this.estado = estado;
        this.valor = valor;
        this.espacioAlquilado = espacioAlquilado;
        this.tipoEvento = tipoEvento;
        this.numeroPersonas = numeroPersonas;
    }
    
}
