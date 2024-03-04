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

  constructor(private _oneSignal: OneSignal){
    this._oneSignal.init({
      appId: environment.oneSignalAppId,
    }).then((resp) => console.log(resp));
  }





}
