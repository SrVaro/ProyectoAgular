import { Component, OnInit } from '@angular/core';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private servicioMenu: ServicioMenuService
  ) { }

  ngOnInit() {
    this.servicioMenu.abrirMenu();
  }

}
