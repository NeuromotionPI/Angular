import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  response: any;

  constructor(private authService: AuthService,private router: Router) { }

  login() {
    this.authService.loginUser(this.username, this.password).subscribe(
      response => {
        this.response = response;
        console.log('Login successful:', response);
        this.router.navigate(['main']).then(success => console.log(success));
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
