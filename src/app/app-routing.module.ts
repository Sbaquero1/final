import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes
import { CrearReservaComponent } from './components/reservas/crear-reserva/crear-reserva.component';
import { ConsultarReservaComponent } from './components/reservas/consultar-reserva/consultar-reserva.component';
import { DesayunoComponent } from './components/servicios/desayuno/desayuno.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';
import { OrdenComponent } from './components/servicios/orden/orden.component';
import { AlmuerzoComponent } from './components/servicios/almuerzo/almuerzo.component';
import { BarComponent } from './components/servicios/bar/bar.component';
import { PasadiasComponent } from './components/servicios/pasadias/pasadias.component';
import { AlquilerComponent } from './components/servicios/alquiler/alquiler.component';
import { ConsultarPasadiasComponent } from './components/servicios/consultar-pasadias/consultar-pasadias.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reserva', component: CrearReservaComponent },
  { path: 'desayuno', component: DesayunoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'orden', component: OrdenComponent },
  { path: 'almuerzo', component: AlmuerzoComponent },
  { path: 'bar', component: BarComponent },
  { path: 'pasadia', component:PasadiasComponent},
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'consultar-pasadia',  component: ConsultarPasadiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
