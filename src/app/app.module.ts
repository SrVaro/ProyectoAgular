import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './header/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './Autentificacion/registro/registro.component';
import { IniciosesionComponent } from './Autentificacion/iniciosesion/iniciosesion.component';

const appRoutes: Routes = [
  { path: '',      component: RegistroComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
