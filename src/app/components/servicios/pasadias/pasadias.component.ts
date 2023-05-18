import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


//importacion de servicios
import { PasadiasService } from '../../../services/pasadias.service';

@Component({
  selector: 'app-pasadias',
  templateUrl: './pasadias.component.html',
  styleUrls: ['./pasadias.component.scss']
})
export class PasadiasComponent implements OnInit {

  public pasadia: FormGroup;

  valorPisina: number = 40000;
  valorAlmuerzo: number = 50000;
  valorServicio: number;

  constructor(
    private pasadiasService: PasadiasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {


    this.pasadia = this.fb.group({
      identificacion: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      nombres: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      apellidos: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      servicios: ['', Validators.required],
      dias: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      numeroPersonas: ['', Validators.required],
      precio: ['',],
    });


  }

  crearPasadia() {
    this.pasadiasService.createPasadia(this.pasadia.value).then(res => {
      console.log('Servicio creado correctamente');
    }).catch(error => {
      console.log(error);
    });
    this.pasadia.reset();
  }

  calcularPrecioServicio() {
    if (this.pasadia.value.servicios === 'Almuerzo & Piscina'){
      this.valorServicio = (this.valorPisina + (this.valorAlmuerzo * this.pasadia.value.dias * this.pasadia.value.numeroPersonas));
    }else if (this.pasadia.value.servicios === 'Piscina'){
      this.valorServicio = this.valorPisina * this.pasadia.value.dias;
    } else{
      this.valorServicio = 0;
    }
  }

}
