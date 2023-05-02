import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { OrdenComponent } from './components/servicios/desayuno/orden/orden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlmuerzoComponent } from './components/servicios/almuerzo/almuerzo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearReservaComponent,
    ConsultarReservaComponent,
    DesayunoComponent,
    HomeComponent,
    NavComponent,
    OrdenComponent,
    AlmuerzoComponent,
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
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
