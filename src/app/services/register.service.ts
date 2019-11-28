import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpService) { }

  register(request: FormData) {
    return this.http.post(`${environment.URL}/registro/`, request);
  }
}
