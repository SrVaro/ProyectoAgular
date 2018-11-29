import { Component, OnInit, HostBinding } from '@angular/core';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @HostBinding('class.is-open')

  menuAbierto : boolean = true;

  constructor(
    private menuService: ServicioMenuService
  ) {

   }

   ngOnInit() {
    this.menuService.change.subscribe(menuAbierto => {
      this.menuAbierto = menuAbierto;
    });
  }

  toggle() {
    this.menuAbierto = !this.menuAbierto;
  }

}
