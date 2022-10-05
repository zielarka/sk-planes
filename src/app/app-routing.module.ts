import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/services/auth.guard';
import { EditFlightComponent } from './flights/edit-flight/edit-flight.component';
import { FlightsComponent } from './flights/flights.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'full'},
      { path: 'flights', component: FlightsComponent},
      { path: 'flights/:key', component: EditFlightComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
