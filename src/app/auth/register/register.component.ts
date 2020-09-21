import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({

    nombre: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    password2: ['', Validators.required]
  });

  constructor(public usuarioService: UsuarioService, public fb: FormBuilder, public router: Router) { }

  register() {
    this.usuarioService.register(this.registerForm.value)
      .subscribe(resp => {
        Swal.fire('Creación de usuarios', 'Creación de usuario correcta', 'success');
        this.router.navigateByUrl('/login');
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
  }

  ngOnInit(): void {
  }

}
