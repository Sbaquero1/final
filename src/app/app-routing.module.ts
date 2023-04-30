import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes
import { CrearReservaComponent } from './components/reservas/crear-reserva/crear-reserva.component';
import { ConsultarReservaComponent } from './components/reservas/consultar-reserva/consultar-reserva.component';
import { DesayunoComponent } from './components/servicios/desayuno/desayuno.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';

const routes: Routes = [
  { path: '', component: CrearReservaComponent },
  { path: 'sd', component: ConsultarReservaComponent },
  { path: 'desayuno', component: DesayunoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
