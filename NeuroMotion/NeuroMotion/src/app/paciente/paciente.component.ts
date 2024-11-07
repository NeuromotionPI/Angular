import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class PacienteComponent {

  patientName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  phoneNumber: string = '';
  registerResponse: any;

  constructor(private authService: AuthService) { }

  registerPatient() {
    const patientData = {
      patientName: this.patientName,
      email: this.registerEmail,
      patientPassword: this.registerPassword,
      phoneNumber: this.phoneNumber
    };

    this.authService.registerUser(patientData).subscribe(
      response => {
        this.registerResponse = response;
        console.log('Patient registration successful:a', response);
      },
      error => {
        console.error('Patient registration failed:', error);
      }
    );
  }
}

