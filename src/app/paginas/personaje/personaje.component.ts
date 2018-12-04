import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public documentId = null;
  public currentStatus = 1; 

  public newPJForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor() {
    this.newPJForm.setValue({
      id: '',
      nombre: '',
      descripcion: '',
      url: ''
    });
   }

  ngOnInit() {
  }

}
