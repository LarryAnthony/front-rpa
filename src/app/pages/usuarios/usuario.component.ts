import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioRpaService } from '../../services/usuario-rpa.service';
import Swal from 'sweetalert2';
import { UsuarioRpa } from '../../models/usuario-rpa.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  public owner: number;
  public usuarioRpa = UsuarioRpa;
  public usuarioForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
    plataforma: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private usuarioRpaService: UsuarioRpaService) {
  }

  ngOnInit(): void {
    // console.log(this.usuarioRpa)
  }
  getUserRpa(id) {
    console.log(id)
    const usuario = this.usuarioRpaService.getUserByid(id)
      .subscribe(resp => {
        this.usuarioRpa = resp.usuarioRpa[0];
        console.log(this.usuarioRpa)
      });
  }
  crear() {
    this.usuarioRpaService.createUserRpa(this.usuarioForm.value)
      .subscribe(resp => {
        Swal.fire('Usuario creado / Actualizado', 'Usuario creado / Actualizado', 'success');
        this.router.navigateByUrl('/principal/usuarios');
      }, err => {
        Swal.fire('error', err.error.msg, 'error');
      });
  }
}
