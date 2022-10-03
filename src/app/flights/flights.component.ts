import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FlightsService } from '../core/services/flights.service';
import { Flight } from '../models/flight.model';
import { DetalisComponent } from './detalis/detalis.component';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent  {

  flights$: Observable<Flight[]> = this.flightsService.getFlights(); 
  constructor(
    private dialog: MatDialog,
    private flightsService: FlightsService) { }

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent);
  }

  showDetails(flight:Flight) {
    this.dialog.open(DetalisComponent, {data: flight});
  }

}
