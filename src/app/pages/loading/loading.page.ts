import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement; //necesito crear esto: el elemento "loading" tiene las propiedades de "HTMLIonLoadingElement"

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading() {
    this.presentLoading('Hola mundo');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000); //después de 2 segundos lo cierro
  }

  async presentLoading( message:string ) {
    this.loading = await this.loadingCtrl.create({
      message,
    }); //sería "message: message", como tiene el mismo nombre se puede poner solo "message"
    await this.loading.present();
  }

}
