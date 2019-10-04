import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public listUser = [
    {
      usuario: '@admin', clave: '123456'
    },
    {
      usuario: '@cliente', clave: '654321'
    },
    {
      usuario: '@visitante', clave: '13579'
    }];

 public login(data: any) {
    const user = this.listUser.find(usr => {
       return (data.user === usr.usuario) && (data.pass === usr.clave);
     });
    if (user) {
      localStorage.setItem('usuario', JSON.stringify(user));
    } else {
      localStorage.setItem('usuario', null);
    }
  }
}
