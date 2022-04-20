import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll; //---> debemos crear esto para manejarlo

  constructor() { }

  ngOnInit() {
  }

  loadData() {

    setTimeout(() => {

      if( this.data.length > 50 ) { //después de 50 líneas, se termina de cargar la data
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return; //istrucción cancelativa
      }

      const nuevoArr = Array(20); //creo un nuevo arreglo de 20 posiciones
      this.data.push( ...nuevoArr ); //agrego ese arreglo al arreglo "data"

      this.infiniteScroll.complete();

    }, 1500); //después de 1 segundo y medio
  }

}
