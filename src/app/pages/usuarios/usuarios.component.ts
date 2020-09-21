import { Component, OnInit } from '@angular/core';
import { UsuarioRpaService } from '../../services/usuario-rpa.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  public cargado = false;
  public usuarioRpa = [];
  public nombre_owner: string;
  constructor(public usuarioRpaService: UsuarioRpaService) {
    this.getUsersRpa();
    this.cargado = true;
  }

  ngOnInit(): void {
  }
  getUsersRpa() {
    this.usuarioRpaService.getUserRpa()
      .subscribe(resp => {
        this.usuarioRpa = resp.usuarioRpa;
        this.nombre_owner = resp.owner;
      });
  }
  eliminar(id: number) {
    this.usuarioRpaService.deleteUserRpa(id)
      .subscribe(resp => {
        console.log('usuario eliminado');
        this.getUsersRpa();
      });

  }
}
