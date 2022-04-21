import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { } //debemos inyectar el servicio del modal

  ngOnInit() {
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: { //mandamos estas propiedades del padre al hijo
        nombre: 'Camila',
        pais: 'Argentina'
      }
    })
    await modal.present();

    //para recibir las propiedades que mandamos desde el hijo
    //const respuesta = await modal.onDidDismiss();
    //console.log(respuesta);
    const { data } = await modal.onDidDismiss(); //usamos destructuración para obtener solo la data
    console.log(data);
    
  }

}
