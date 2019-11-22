import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-mail',
  templateUrl: './ver-mail.component.html',
  styleUrls: ['./ver-mail.component.scss']
})
export class VerMailComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
