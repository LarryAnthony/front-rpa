import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioRpaService } from '../../services/usuario-rpa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioRpa } from 'src/app/models/usuario-rpa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-rpa-update',
  templateUrl: './usuario-rpa-update.component.html',
  styles: [
  ]
})
export class UsuarioRpaUpdateComponent implements OnInit {
  public usuarioRpa: UsuarioRpa;
  public updateForm: FormGroup;
  public id: string;

  constructor(public fb: FormBuilder, public usuarioRpaService: UsuarioRpaService, public activatedRoute: ActivatedRoute, public router: Router) {
    activatedRoute.params.subscribe(async (params) => {
      this.id = params.id;
      // console.log(id);
      await this.getUserRpa(this.id);
      console.log(this.usuarioRpa);
      this.updateForm = this.fb.group({
        usuario: [this.usuarioRpa.usuario, Validators.required],
        password: [this.usuarioRpa.password || '', Validators.required],
        plataforma: [this.usuarioRpa.plataforma || '', Validators.required]
      });
    });
  }

  ngOnInit(): void {
    // console.log(this.usuarioRpa);
  }
  async getUserRpa(id) {
    console.log(id);
    const usuario = await this.usuarioRpaService.getUserByid(id)
      .toPromise();
    this.usuarioRpa = usuario.usuarioRpa[0];
    // .subscribe(resp => {
    //   this.usuarioRpa = resp.usuarioRpa[0];
    //   // console.log(this.usuarioRpa);
    // });
  }
  update() {
    console.log(this.usuarioRpa);
    console.log(this.updateForm.value, this.id);
    this.usuarioRpaService.updateUserRpa(Number(this.id), this.updateForm.value)
      .subscribe(resp => {
        Swal.fire('Usuario creado / Actualizado', 'Usuario creado / Actualizado', 'success');
        this.router.navigateByUrl('/principal/usuarios');
      });
  }
}
