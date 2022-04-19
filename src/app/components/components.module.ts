//librerías de terceros
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
//los que creo yo
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ //agrupamos todos los componentes personalizados, así puedo usarlos en otros lados
    HeaderComponent
  ],
  exports: [ //todo lo que debo usar fuera de este módulo se debe exportar
    HeaderComponent
  ],
  imports: [ //componentes personalizados
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
