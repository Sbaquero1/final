import { Component, OnInit, inject } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {


  reservasDetalles!: FormGroup;
  personasDetalles!: FormGroup;
  pagoDetalles!: FormGroup;
  reserva_step = false;
  personas_step = false;
  pago_step = false;
  step = 1;

  // firestore: Firestore = inject(Firestore)
  // items$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder) {

    // const aCollection = collection(this.firestore, 'items')
    // this.items$ = collectionData(aCollection);
  }

  ngOnInit() {

    this.reservasDetalles = this.formBuilder.group({
      adultos: ['', Validators.required],
      ninos: ['', Validators.required],
      dias: ['',Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
    });

    this.personasDetalles = this.formBuilder.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      genero: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
    });

    this.pagoDetalles = this.formBuilder.group({
      tipoTarjeta: ['', Validators.required],
      nombreTarjeta: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      cvv: ['', Validators.required],
      mes: ['', Validators.required],
      anio: ['', Validators.required],
    });
  }

  get reserva() { return this.reservasDetalles.controls; } // obtener los controles del formulario de reservas para validar los campos requeridos en el html con *ngIf
  get pago() { return this.pagoDetalles.controls; }
  get persona() { return this.personasDetalles.controls; }



  siguiente(){

    if(this.step==1){
      this.reserva_step = true;
      if (this.reservasDetalles.invalid) { return }
      this.step++;
    }

    if(this.step==2){
        this.personas_step = true;
        if (this.personasDetalles.invalid) { return }
        this.step++;
    }


  }

  anterior(){

    this.step--
    if(this.step==1){
      this.reserva_step = false;
    }
    if(this.step==2){
      this.pago_step = false;
    }
  }

  pagar(){

    if(this.step==3){
      this.pago_step = true;
      if (this.pagoDetalles.invalid) {

        // this.firestore.collection('items').add({
        //   name: 'Angular',
        //   description: 'Angular is a great framework'
        // });


      }
    }
  }
}
