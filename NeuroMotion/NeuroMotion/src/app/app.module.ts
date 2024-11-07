// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PacienteComponent } from './paciente/paciente.component';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    PacienteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
