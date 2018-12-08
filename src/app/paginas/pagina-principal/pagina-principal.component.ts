import { Component, OnInit } from '@angular/core';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';
import { ServicioFirebaseService } from 'src/app/servicios/servicio-firebase.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/public_api';
import { NuevoPersonajeComponent } from '../nuevo-personaje/nuevo-personaje.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {


  public documentId = null;

  public currentStatus = 2; 

  public pjs = [];

  private _opened: boolean = false;

  public editPJForm = new FormGroup({
    nombre: new FormControl('' ,Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl(''),
    descripcion: new FormControl(''),
    saga: new FormControl(''),
    cita: new FormControl(''),
    arriba: new FormControl('' ,Validators.required),
    abajo: new FormControl('',Validators.required),
    lateral: new FormControl('',Validators.required),
    normal: new FormControl('',Validators.required),
    smash: new FormControl('',Validators.required),
  });

  edicionForm: FormGroup;


  constructor(
    private servicioMenu: ServicioMenuService,
    private db: ServicioFirebaseService,
    private fb: FormBuilder
  ) { 
    this.editPJForm.setValue({
      id: '',
      nombre: '',
      url: '',
      descripcion: '',
      saga: '',
      cita: '',
      arriba: '',
      abajo: '',
      lateral: '',
      normal: '',
      smash: ''
    });
  }

  public editPJ(documentId) {
    this._toggleSidebar();
    let editSubscribe = this.db.getPJ(documentId).subscribe((pj:any) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.editPJForm.setValue({
        id: documentId,
        nombre: pj.payload.data().nombre,
        url: pj.payload.data().url,
        descripcion: pj.payload.data().descripcion,
        saga: pj.payload.data().saga,
        cita: pj.payload.data().cita,
        arriba: pj.payload.data().arriba,
        abajo: pj.payload.data().abajo,
        lateral: pj.payload.data().lateral,
        normal: pj.payload.data().normal,
        smash: pj.payload.data().smash

      });
      editSubscribe.unsubscribe();
    });
  }

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


  public deletePJ(documentId) {
    this.db.deletePJ(documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }

  

  private _toggleSidebar() {
    this._opened = !this._opened;
  }


}


