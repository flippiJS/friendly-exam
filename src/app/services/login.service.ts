import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sto: StorageService, private router: Router) { }

  public listUser = this.sto.get('usuarios');

  public login(data: any) {
    const user = this.listUser.find(usr => {
      return (data.user === usr.mail) && (data.pass === usr.clave);
    });
    if (user) {
      localStorage.setItem('usuario', JSON.stringify(user));
      this.router.navigate(['/bienvenido']);
    } else {
      localStorage.setItem('usuario', null);
    }
  }
}
