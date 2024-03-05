import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC-notification-one-signal';

  constructor(private _oneSignal: OneSignal) {
    this._oneSignal.init({
      appId: environment.oneSignalAppId,
    }).then((resp) => {
      this.suscribirANotificaciones()

      this.verificarSiEstaSuscrito()


    });
  }


  verificarSiEstaSuscrito() {
    this._oneSignal.isPushNotificationsEnabled().then(permission => {
      if (permission) {
        console.log('Push notifications enabled!');
        this.obtenerUserId();
        this.enviarTags();
      } else {
        console.log('Push notifications are not enabled!');
        this._oneSignal.registerForPushNotifications().then()
      }
    })
  }

  obtenerUserId() {
    this._oneSignal.getUserId().then(userId => console.log({userId}))
  }

  enviarTags() {
    this._oneSignal.sendTags({rol: 'cliente', zona: 'Sierra'})
      .then()
  }

  suscribirANotificaciones() {
    this._oneSignal.on('subscriptionChange', (subs) => {
      console.log('Subs change: ', subs);
      if (subs) {
        //enviar los tags
        this.obtenerUserId();
        this.enviarTags();
      } else {
        this.verificarSiEstaSuscrito()
      }
    })
  }

}
