import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date(); //toma la fecha actual

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ) {
    console.log(event); //muestro toda la información del evento
    console.log( new Date( event.detail.value ) ); //muestro solo la fecha
  }

}
