import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//importaciones enverioments
import { environment } from 'src/environments/environment';

//importaciones  clases firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//importaciones de componentes
import { CrearReservaComponent } from './components/reservas/crear-reserva/crear-reserva.component';
import { ConsultarReservaComponent } from './components/reservas/consultar-reserva/consultar-reserva.component';
import { DesayunoComponent } from './components/servicios/desayuno/desayuno.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavComponent } from './components/nav/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearReservaComponent,
    ConsultarReservaComponent,
    DesayunoComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
