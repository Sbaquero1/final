import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.scss']
})
export class DesayunoComponent implements OnInit {

  desayunos = [
    { nombre: 'Tostada de aguacate', descripcion: 'Pan tostado con aguacate y huevo', precio: 5.99 },
    { nombre: 'Bowl de frutas', descripcion: 'Mezcla de frutas frescas con granola y yogur', precio: 6.99 },
    { nombre: 'Omelette de jamón y queso', descripcion: 'Omelette de tres huevos con jamón y queso', precio: 7.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
