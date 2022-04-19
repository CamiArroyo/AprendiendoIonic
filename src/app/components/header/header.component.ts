import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header', //Este es el nombre con el que lo vamos a llamar
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  //Mediante un Input debo recibir el texto que quiero mostrar en el Header
  @Input() titulo: string='';

}
