import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //primero en app.module importamos el módulo "HttpClientModule"

  constructor( private http: HttpClient) { }

  getUsuarios() { //creamos este método: es un "observable" que regresa un objeto
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() { //traemos las opciones del menú desde el archivo json local
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

}
