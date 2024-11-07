import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // Importa HttpClientModule directamente aquí
    ...appConfig.providers // Agrega los demás proveedores de appConfig
  ]
}).catch(err => console.error(err));
