import { Component, OnInit } from '@angular/core';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';
import { ServicioFirebaseService } from 'src/app/servicios/servicio-firebase.service';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  public pjs = [];

  private _opened: boolean = false;

  private flipped: boolean = false;

  constructor(
    private servicioMenu: ServicioMenuService,
    private db: ServicioFirebaseService
  ) { }

  ngOnInit() {
    this.servicioMenu.abrirMenu();
    this.db.getPJs().subscribe((pjsSnapshot) => {
      this.pjs = [];
      pjsSnapshot.forEach((pjData: any) => {
        this.pjs.push({
          id: pjData.payload.doc.id,
          data: pjData.payload.doc.data()
        });
      })
    });
  }

  private flip(){
    this.flipped = !this.flipped;
  }


  private _toggleSidebar() {
    this._opened = !this._opened;
  }


}


