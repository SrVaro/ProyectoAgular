import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutentificacionService } from 'src/app/servicios/servicio-autentificacion.service';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  inicioAbierto: boolean = true;

  constructor(
    public authService: ServicioAutentificacionService,
    private router: Router,
    private fb: FormBuilder,
    private servicioMenu: ServicioMenuService,
    private servicioSpinner: NgxSpinnerService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.servicioMenu.cerrarMenu();
  }

  spinner(): void{
    this.servicioSpinner.show();
    setTimeout(() => {
        this.servicioSpinner.hide();
    }, 2000)
  }

  cambiarFormulario(){
    this.inicioAbierto = !this.inicioAbierto;
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryGoogleLogin(){
    this.spinner();
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    
    this.authService.doLogin(value)
    .then(res => {
      this.spinner();
      this.router.navigate(['/user']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
