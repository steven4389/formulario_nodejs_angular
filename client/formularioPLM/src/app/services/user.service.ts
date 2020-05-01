import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


export interface UserDetails {
  nombre: string;
  apellido: string;
  docType: string;
  docIdent: string;
  email: string;
  celular: string;
  fechaNacimiento: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: 'http://localhost:3000';
  constructor(private _httpClient: HttpClient) { }


  createUser(usuario: UserDetails) {
    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('this.url', this.url);
    return this._httpClient.post('http://localhost:3000' + '/users/formulario', params, { headers });
  }

}
