import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];

  //creamos una propiedad booleana para el boton toggle
  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ) {
    console.log(event);

    //2°: necesitamos que una vez hecho el cambio, el arreglo se modifique
    const itemMover = this.personajes.splice( event.detail.from, 1 )[0]; //tomo el elemento que moví: corto el arreglo creando uno nuevo y tomo la posición 0
    this.personajes.splice( event.detail.to, 0, itemMover); //ahora debo insertar este ítem que estoy moviendo a la posición correcta

    event.detail.complete(); //1°: con esto una vez que lo movemos, se queda en esa posición

    console.log(this.personajes);
  }

}
