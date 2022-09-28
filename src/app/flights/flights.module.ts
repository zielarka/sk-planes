import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [FlightsComponent,FlightCardComponent],
  declarations: [FlightsComponent,FlightCardComponent]
})
export class FlightsModule { }
