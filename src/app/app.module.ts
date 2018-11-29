import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciosesionComponent } from './Autentificacion/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './Autentificacion/registro/registro.component';
import { MenuComponent } from './header/menu/menu.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { ServicioAutentificacionService } from './servicios/servicio-autentificacion.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: IniciosesionComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'user', component: PaginaPrincipalComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroComponent,
    IniciosesionComponent,
    PaginaPrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioAutentificacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
