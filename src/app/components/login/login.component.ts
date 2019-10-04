import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.myForm = new FormGroup({
      user: new FormControl(),
      pass: new FormControl()
    });
  }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.myForm.value);
    this.loginService.login(this.myForm.value);
  }

}
