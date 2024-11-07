import { Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: PacienteComponent }
];
