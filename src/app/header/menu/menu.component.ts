import { Component, OnInit, HostBinding  } from '@angular/core';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';
import { ServicioAutentificacionService } from 'src/app/servicios/servicio-autentificacion.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NuevoPersonajeComponent } from 'src/app/paginas/nuevo-personaje/nuevo-personaje.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @HostBinding('class.is-open')
  
  bsModalRef: BsModalRef;

  menuAbierto : boolean = true;

  logged : boolean = false;

  constructor(
    private authFirebase : ServicioAutentificacionService,
    private menuService: ServicioMenuService,
    private modalService: BsModalService
  ) {
    this.isLogged();
   }

   ngOnInit() {
    this.menuService.change.subscribe(menuAbierto => {
      this.menuAbierto = menuAbierto;
    });
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(NuevoPersonajeComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  

  toggle() {
    this.menuAbierto = !this.menuAbierto;
  }

  isLogged() {
    this.authFirebase.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.logged = true;
      } else {
        console.log('NOT user logged');
        this.logged = false;
      }
    });
  }

  logout(){
    this.authFirebase.logout();
  }

  
}
