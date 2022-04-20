import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Camila';

  usuario = {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) { //Se debe importar el NgForm
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
