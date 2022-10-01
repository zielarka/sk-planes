import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FlightsService } from 'src/app/core/services/flights.service';
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {

  @ViewChild('flightForm') flightForm: FlightFormComponent

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private flightService: FlightsService
  ) { }

  createFlight() {
    console.log(this.flightForm);
    this.flightService.addFlights(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this),this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess () {
    this.dialogRef.close();
  }

  private onCreatingFailure () {
    console.log('some error');
  }
}
