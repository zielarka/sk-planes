import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent, LoginComponent],
  declarations: [DashboardComponent, LoginComponent]
})
export class CoreModule { }
