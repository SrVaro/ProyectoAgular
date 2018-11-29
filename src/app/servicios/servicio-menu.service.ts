import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioMenuService {

  menuAbierto : boolean = true;
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

   cerrarMenu() {
    this.menuAbierto = false;
    this.change.emit(this.menuAbierto);
  }

    abrirMenu() {
    this.menuAbierto = true;
    this.change.emit(this.menuAbierto);
  }
}
