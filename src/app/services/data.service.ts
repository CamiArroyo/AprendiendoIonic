import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //primero en app.module importamos el módulo "HttpClientModule"

  constructor( private http: HttpClient) { }

  getUsuarios() { //creamos este método: es un "observable" que regresa un objeto
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
