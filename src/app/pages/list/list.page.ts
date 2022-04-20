import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;
  
  //para hacer una referencia a algún elemento del HTML por el nombre de componente, uso el ViewChild
  @ViewChild(IonList) ionList: IonList;

  //vamos a llamar el servicio que creamos en "data.service" para usar ahora en la lista
  constructor( private dataService: DataService) { }

  ngOnInit() { //como es un "observable", si no mando un "subscribe" esto nunca se va a disparar

    //--> quiero llamarlo para asegurarme que tengo la información en consola
    //this.dataService.getUsuarios().subscribe( console.log )

    //--> ahora quiero mostrar esto, pero en el HTML
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite( user: any ) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems(); //después de hacer click se cierra: una propiedad de ionList
  }

  share( user:any ) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete( user:any ) {
    console.log('delete', user);
    this.ionList.closeSlidingItems();
  }

}
