import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { RegisterForm } from '../interfaces/register-form.interface';
import { UpdateForm } from '../interfaces/update-form.interface';
import { Observable, of } from 'rxjs';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  get token(): string {
    return localStorage.getItem('token') || '';
  }
  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token);
        }));
  }
  register(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }
  update(formData: UpdateForm) {
    console.log(formData)
    return this.http.put(`${base_url}/usuarios`, formData);
  }
  validarToken(): Observable<boolean> {
    return this.http.get(`${base_url}/renew`, {
      headers: new HttpHeaders().set('x-token', this.token)
    })
      .pipe(map((resp: any) => {
        localStorage.setItem('token', resp.token);
        return true;
      }), catchError((err) => of(false)
      ));
  }

}
