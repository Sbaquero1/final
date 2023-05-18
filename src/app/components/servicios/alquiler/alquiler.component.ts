import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'; // importacion de moment

//importacion de servicios
import { AlquilerService } from '../../../services/alquiler.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss']
})
export class AlquilerComponent implements OnInit {


  public alquiler: FormGroup;

  valorTotalidad: number = 500000;
  valorParcial: number = 70000;
  valorServicio: number;
  
  constructor(
    private alquilerService: AlquilerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.alquiler = this.fb.group({

      identificacion: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellidos: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fechaInicio: ['', Validators.required],
      fechaFin: ['',],
      dias: ['', Validators.required],
      estado: ['Reservado',],
      valor: ['', ],
      espacioAlquilado: ['', Validators.required],
      tipoEvento: ['', Validators.required],
      numeroPersonas: ['', Validators.required],
    });
    
  }

  crearAlquiler() {

    this.alquilerService.createAlquiler(this.alquiler.value).then(res => {
      console.log('Servicio creado correctamente');
    }).catch(error => {
      console.log(error);
    });
    this.alquiler.reset();
  }

  calcularValorAlquiler() {
    if (this.alquiler.value.tipoEvento === 'Familiar' && this.alquiler.value.espacioAlquilado === 'Totalidad') {
      this.valorServicio = this.valorTotalidad * this.alquiler.value.dias;
    } else if (this.alquiler.value.tipoEvento === 'Familiar' && this.alquiler.value.espacioAlquilado === 'Parcial') {
      this.valorServicio = this.valorParcial * this.alquiler.value.dias;
    } else if (this.alquiler.value.tipoEvento === 'Empresarial' && this.alquiler.value.espacioAlquilado === 'Totalidad') {
      this.valorServicio = this.valorTotalidad * this.alquiler.value.dias;
    } else if (this.alquiler.value.tipoEvento === 'Empresarial' && this.alquiler.value.espacioAlquilado === 'Parcial') {
      this.valorServicio = this.valorParcial * this.alquiler.value.dias;
    }else {
      this.valorServicio = 0;
    }
  }
  

}
