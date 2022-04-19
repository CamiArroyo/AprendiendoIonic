import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data= [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( item:any ) { //muestro con cada click qué se selecciona y si está en true o en false
    console.log(item)
  }

  verData() { //muestro todos los resultados juntos
    console.log(this.data)
  }

}
