import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { UsuarioForm } from '../interfaces/usuario-form.interface';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioRpaService {

  constructor(private http: HttpClient) {
  }

  getUserRpa() {
    return this.http.get(`${base_url}/usuario-rpa`, {
      headers: new HttpHeaders().set('x-token', localStorage.getItem('token'))
    })
      .pipe(
        tap((resp: any) => {
        })
      );
  }
  createUserRpa(formData: UsuarioForm) {
    return this.http.post(`${base_url}/usuario-rpa`, formData, {
      headers: new HttpHeaders().set('x-token', localStorage.getItem('token'))
    })
      .pipe(
        tap((resp: any) => {
          console.log(resp);
        })
      );
  }
  deleteUserRpa(id: number) {
    return this.http.delete(`${base_url}/usuario-rpa/${id}`, {
      headers: new HttpHeaders().set('x-token', localStorage.getItem('token'))
    })
      .pipe(
        tap((resp: any) => {
          console.log(resp);
        })
      );
  }
  getUserByid(id: number) {
    return this.http.get(`${base_url}/usuario-rpa/${id}`, {
      headers: new HttpHeaders().set('x-token', localStorage.getItem('token'))
    })
      .pipe(
        tap((resp: any) => {
          // console.log(resp);
        })
      );
  }
  updateUserRpa(id: number, formData: UsuarioForm) {
    return this.http.put(`${base_url}/usuario-rpa/${id}`, formData, {
      headers: new HttpHeaders().set('x-token', localStorage.getItem('token'))
    })
      .pipe(tap((resp) => { }))
  }
}
