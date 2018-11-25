import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuAbierto : boolean = false;

  constructor() {

   }

  ngOnInit() {
  }

  toggle() {
    this.menuAbierto = !this.menuAbierto;
  }

}
