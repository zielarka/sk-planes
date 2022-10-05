import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credencials = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService
  ) { }

  login() {
    this.authService.login(this.credencials)
      .then(user => this.router.navigate(['/dashboard']))
      .catch(error => this.toast.open(error.message));
  }

  register() {
    this.authService.register(this.credencials)
      .then(user => this.toast.open('Account created, please log in!', '', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message,'',{panelClass: 'toast-error'}));
  }

}
