import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {
  constructor(private httpClient: HttpClient) { }

  // URL API
  private _URL = 'http://localhost:3535/api/v1/';

  public getPelicula(id: any) {
    return this.httpClient.get(this._URL + 'films/' + id);
  }

  public getPeliculas() {
    return this.httpClient.get(this._URL + 'films');
  }

  public addPelicula(data: any) {
    return this.httpClient.post(this._URL + 'films', data);
  }

  public updatePelicula(data: any) {
    return this.httpClient.put(this._URL + 'films', data);
  }

  public deletePelicula(id: any) {
    return this.httpClient.delete(this._URL + 'films/' + id);
  }
}
