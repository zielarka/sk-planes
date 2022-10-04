import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { tap } from 'rxjs';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService,
    private router: Router,
    private toast: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadFlight();
  }

  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightService.getFlight(key)
    .pipe(tap(flight => this.flightForm.setFlight(flight)))
    .subscribe(flight => this.flight = flight)
  }

  removeFlight() {
    this.flightService.removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onRemoveSuccess () {
    this.router.navigate(['/dashboard/flights']);
    this.toast.open('Flight has been succesfully removed!', '', {panelClass: 'toast-success',"duration": 2000})
  }

  private onFailure (error: { message: string; }) {
    this.toast.open(error.message, '', {panelClass: 'toast-error',"duration": 2000})
  }

}
