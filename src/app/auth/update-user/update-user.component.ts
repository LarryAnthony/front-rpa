import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent implements OnInit {

  public updateForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password1: ['', Validators.required],
    password2: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) { }

  update() {
    this.usuarioService.update(this.updateForm.value)
      .subscribe(resp => {
        Swal.fire('Actualización de usuarios', 'Actualización de usuario correcta', 'success');
        this.router.navigateByUrl('/login');
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
  }


  ngOnInit(): void {
  }

}
