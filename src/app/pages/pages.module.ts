import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuarios/usuario.component';
import { UsuarioRpaUpdateComponent } from './usuarios/usuario-rpa-update.component';



@NgModule({
  declarations: [UsuariosComponent, PagesComponent, PrincipalComponent, UsuarioComponent, UsuarioRpaUpdateComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    UsuariosComponent,
    PagesComponent,
    PrincipalComponent
  ]
})
export class PagesModule { }
