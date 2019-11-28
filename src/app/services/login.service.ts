import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(data: any) {
    return this.http.post(`${environment.URL}/usuarios/login`, {mail: data.user, clave: data.pass});
  }
}
