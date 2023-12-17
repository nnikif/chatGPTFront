// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username ='';
  password ='';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful!');
        // Handle successful login, like redirecting to another page
      },
      error => {
        console.error('Login failed:', error);
        // Handle login error
      }
    );
  }
}
