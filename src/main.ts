import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA8bBK0GyYbSdRS1JkOMvN0E-F0BsoGKms",
//   authDomain: "pwatest-79bbd.firebaseapp.com",
//   databaseURL: "https://pwatest-79bbd-default-rtdb.firebaseio.com",
//   projectId: "pwatest-79bbd",
//   storageBucket: "pwatest-79bbd.appspot.com",
//   messagingSenderId: "869656264442",
//   appId: "1:869656264442:web:db326ad93d410c74bcd343",
//   measurementId: "G-G684MQCW3Y"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
