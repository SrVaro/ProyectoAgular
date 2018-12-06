import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ServicioFirebaseService } from 'src/app/servicios/servicio-firebase.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent implements OnInit {

  public documentId = null;

  public currentStatus = 1; 

  public newPJForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl(''),
    descripcion: new FormControl(''),
    saga: new FormControl('')
  });

  creacionForm: FormGroup;


  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private servicioFirestore: ServicioFirebaseService
  ) { 
    this.newPJForm.setValue({
      id: '',
      nombre: '',
      url: '',
      descripcion: '',
      saga: ''
    });
  }

  ngOnInit() {
  }


  public newPJ(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        nombre: form.nombre,
        url: form.url,
        descripcion: form.descripcion,
        saga: form.saga
      }
      this.servicioFirestore.createPJ(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.bsModalRef.hide();
        this.newPJForm.setValue({
          nombre: '',
          url: '',
          id: '',
          descripcion: '',
          saga: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.servicioFirestore.updatePJ(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newPJForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
