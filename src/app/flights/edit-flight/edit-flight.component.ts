import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService
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

}
