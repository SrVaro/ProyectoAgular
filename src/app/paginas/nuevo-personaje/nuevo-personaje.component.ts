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
    id: new FormControl('')
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
      url: ''
    });
  }

  ngOnInit() {
  }


  public newPJ(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.servicioFirestore.createPJ(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newPJForm.setValue({
          nombre: '',
          url: '',
          id: ''
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
