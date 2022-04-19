import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController ) { } //debemos agregar esto

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() { //veamos el "async" y el "await"
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      backdropDismiss: false, //para que no se cierre al hacer click afuera
      buttons: [
      {
        text: 'Delete',
        role: 'destructive', //en ios se ve rojo por defecto
        icon: 'trash-outline',
        cssClass: 'rojo', //para que se vea rojo en android -> modificamos "global.scss"
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, 
      {
        text: 'Share',
        icon: 'share-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, 
      {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, 
      {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

}
