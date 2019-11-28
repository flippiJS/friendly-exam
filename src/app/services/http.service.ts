import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url).pipe(response => response);
  }

  post(url: string, body: any) {
    return this.http.post(url, body).pipe(response => response);
  }
}
