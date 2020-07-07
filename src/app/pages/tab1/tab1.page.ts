import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public DeseosService: DeseosService,
                private router: Router,
                private alertCtrl: AlertController ) {

      
  }

 async agregarLista(){
    

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Cancelar");
        }
      },
    { 
      text: 'Crear',
      handler: ( data ) => {
        if (data.titulo.length === 0) {
          return;
        }
        const listaId = this.DeseosService.crearLista( data.titulo );
        this.router.navigateByUrl(`/tabs/agregar/${listaId}`);
      }
    }]
    });

    alert.present();
  }
}
