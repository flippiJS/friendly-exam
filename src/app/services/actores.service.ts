import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ActoresService {
  constructor(private httpClient: HttpClient) { }

  // URL API
  private _URL = 'http://localhost:3535/api/v1/';

  public getActor(id: any) {
    return this.httpClient.get(this._URL + 'actors/' + id);
  }

  public getActores() {
    return this.httpClient.get(this._URL + 'actors');
  }

  public addActor(data: any) {
    return this.httpClient.post(this._URL + 'actors', data);
  }

  public updateActor(data: any) {
    return this.httpClient.put(this._URL + 'actors', data);
  }

  public deleteActor(id: any) {
    return this.httpClient.delete(this._URL + 'actors/' + id);
  }
}
