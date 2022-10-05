import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = this.authService.user
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }

}
