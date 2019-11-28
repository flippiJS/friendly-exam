import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private loginService: LoginService, private router:Router) {
    this.myForm = new FormGroup({
      user: new FormControl(),
      pass: new FormControl()
    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.myForm.value);
    this.loginService.login(this.myForm.value).subscribe((resp: any) => {
      if (resp.content) {
        localStorage.setItem('usuario', JSON.stringify(resp.content));
        this.router.navigate(['/bienvenido']);
      } else {
        localStorage.setItem('usuario', null);
      }
    });
  }
}
