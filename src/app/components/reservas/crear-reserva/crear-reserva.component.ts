import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { DatePipe } from '@angular/common';
//importacion de servicios
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.scss'],
  providers: [DatePipe]
})
export class CrearReservaComponent implements OnInit {


  public reservasDetalles!: FormGroup;
  public personasDetalles!: FormGroup;
  public pagoDetalles!: FormGroup;
  public reserva_step = false;
  public personas_step = false;
  public pago_step = false;
  public step = 1;

  adultos: number = 1;
  ninos: number = 0;
  dias: number = 1;
  fechaInicio: Date;
  fechaFin: any;


  constructor(
    private reservaService: ReservaService,
    private datePipe: DatePipe,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.reservasDetalles = this.fb.group({
      adultos: ['', Validators.required],
      ninos: ['', Validators.required],
      dias: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
    });

    this.personasDetalles = this.fb.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      genero: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
    });

    this.pagoDetalles = this.fb.group({
      tipoTarjeta: ['', Validators.required],
      nombreTarjeta: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      cvv: ['', Validators.required],
      mes: ['', Validators.required],
      anio: ['', Validators.required],
    });

    //consoltar reservas
    this.reservaService.getReservas().subscribe(reservas => {
      console.log(reservas);
    });

  }

  calcularFechaFin() {
    // Calcular la fecha fin
    const fechaInicioMs = this.fechaInicio.getTime();
    const diasMs = this.dias * 24 * 60 * 60 * 1000;
    const fechaFinMs = fechaInicioMs + diasMs;
    const fechaFin = new Date(fechaFinMs);

    // Formatear la fecha fin usando DatePipe
    this.fechaFin = this.datePipe.transform(fechaFin, 'yyyy-MM-dd');
  }
  

  get reserva() { return this.reservasDetalles.controls; } // obtener los controles del formulario de reservas para validar los campos requeridos en el html con *ngIf
  get pago() { return this.pagoDetalles.controls; }
  get persona() { return this.personasDetalles.controls; }



  siguiente() {

    if (this.step == 1) {
      this.reserva_step = true;
      if (this.reservasDetalles.invalid) { return }
      this.step++;
    }

    if (this.step == 2) {
      this.personas_step = true;
      if (this.personasDetalles.invalid) { return }
      this.step++;
    }


  }

  anterior() {

    this.step--
    if (this.step == 1) {
      this.reserva_step = false;
    }
    if (this.step == 2) {
      this.pago_step = false;
    }
  }

  pagar() {

    if (this.step == 3) {
      this.pago_step = true;
      if (this.pagoDetalles.invalid) {
      }
    }
  }

  //crear reservas con los 3 pasos 
  crearReserva() {
      
      if (this.step == 3) {
        if (this.reservasDetalles.invalid) { return }
        if (this.personasDetalles.invalid) { return }
        if (this.pagoDetalles.invalid) { return }
  
        this.reservaService.createResereva(this.reservasDetalles.value).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        });
  
        this.reservaService.createResereva(this.personasDetalles.value).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        });
  
        this.reservaService.createResereva(this.pagoDetalles.value).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        });
  
        this.reservasDetalles.reset();
        this.personasDetalles.reset();
        this.pagoDetalles.reset();
        this.step = 1;
        this.reserva_step = false;
        this.personas_step = false;
        this.pago_step = false;
      }

      console.log('Reserva creada con exito')
    }
}
