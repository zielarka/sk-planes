import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
  ],
  entryComponents: [NewFlightComponent],
  exports: [FlightsComponent,FlightCardComponent],
  declarations: [FlightsComponent,FlightCardComponent,NewFlightComponent,FlightFormComponent]
})
export class FlightsModule { }
