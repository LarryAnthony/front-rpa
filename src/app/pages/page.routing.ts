import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario.component';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioRpaUpdateComponent } from './usuarios/usuario-rpa-update.component';

const routes: Routes = [
    {
        path: 'principal',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios RPA' } },
            { path: '', component: PrincipalComponent, data: { titulo: 'Principal' } },
            { path: 'usuarios/usuario', component: UsuarioComponent, data: { titulo: 'Usuario' } },
            { path: 'usuarios/:id', component: UsuarioRpaUpdateComponent, data: { titulo: 'Usuario' } },
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
