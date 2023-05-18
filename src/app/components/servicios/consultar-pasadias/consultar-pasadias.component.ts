import { Component, OnInit } from '@angular/core';

//importar servicio 
import { PasadiasService } from '../../../services/pasadias.service';

@Component({
  selector: 'app-consultar-pasadias',
  templateUrl: './consultar-pasadias.component.html',
  styleUrls: ['./consultar-pasadias.component.scss']
})
export class ConsultarPasadiasComponent implements OnInit {

  dataPasadias: any[] = [];
  
  
  constructor(
    private pasadiasService: PasadiasService
    
  ) { }

  ngOnInit(): void {
    
    this.pasadiasService.getPasadias().subscribe(pasadias => {
      this.dataPasadias = pasadias;
      console.log(this.dataPasadias);
    });
  }

}
