import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }


/*   public login(data: any) {
    const user = this.listUser.find(usr => {
      return (data.user === usr.mail) && (data.pass === usr.clave);
    });
    if (user) {
      localStorage.setItem('usuario', JSON.stringify(user));
      this.router.navigate(['/bienvenido']);
    } else {
      localStorage.setItem('usuario', null);
    }
  } */

  login(data: any) {
    return this.http.post(`${environment.URL}/Login/`, {email: data.username, password: data.password});
  }
}
