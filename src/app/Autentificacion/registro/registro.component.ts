import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from 'src/app/header/menu/menu.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutentificacionService } from 'src/app/servicios/servicio-autentificacion.service';
import { ServicioMenuService } from 'src/app/servicios/servicio-menu.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(
    public authService: ServicioAutentificacionService,
    private router: Router,
    private fb: FormBuilder,
    private servicioMenu: ServicioMenuService
  ) {
    this.createForm();
    
   }

  ngOnInit() {

    this.servicioMenu.cerrarMenu();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res =>{
      this.router.navigate(['/user']);
    }, err => console.log(err)
    )
  }
  


}
