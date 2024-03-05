# POCNotificationOneSignal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18 y Node 16.14.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Configuracion extra

Dentro del service worker a configurar agregar las funciones que da el service worker generado por angular:
importScripts('./ngsw-worker.js');

```typescript
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
importScripts('./ngsw-worker.js');

```

### Configuracion de push notification

[Ver: Configurar one signal angular.][1]

[1]: https://documentation.onesignal.com/docs/angular-setup

### Notas:

1. Revisar el enlace de configuración de one signal en Angular.
2. Tener instalado de manera global firebase-tools@12.9.1
3. Para desplegar solo ejecutar el comando

```
firebase deploy
```

4. para eso se debe tener configurado el proyecto con firebase si no se usa el mismo proyecto ejecutar

```
firebase init
```

