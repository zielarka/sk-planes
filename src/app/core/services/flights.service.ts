import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private databaseURL = environment.firebase.databaseURL;
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) {}

  getFlight(key:string): Observable<Flight> {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(flight => this.assingKey(flight)));
  }

  getFlights(): Observable<Flight[]> {
    return this.db
      .list<any>(this.API_URL)
      .snapshotChanges()
      .pipe(
        map((response) => response.map((flight) => this.assingKey(flight)))
      );
  }

  addFlights(flights: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flights);
  }

  removeFlight(key:string) {
    return this.db.object(`${this.API_URL}/${key}`).remove();
  }

  private assingKey(flight:any) {
    return {...flight.payload.val(), key: flight.key}
  }

  
}
