import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private flightService: FlightsService,
    private toast: MatSnackBar
  ) { }

  createFlight() {
    console.log(this.flightForm);
    this.flightService.addFlights(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this),this.onCreatingFailure.bind(this));
  }

  private onCreatingSuccess () {
    this.dialogRef.close();
    this.toast.open('Flight has been succesfully created!', '', {panelClass: 'toast-success',"duration": 2000})
  }

  private onCreatingFailure (error: { message: string; }) {
    this.toast.open(error.message, '', {panelClass: 'toast-error',"duration": 2000})
  }
}
