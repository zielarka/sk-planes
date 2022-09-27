import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private databaseURL = environment.firebase.databaseURL;
  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) {}

  getFlights(): Observable<any[]> {
    return this.db
      .list<any>(this.API_URL)
      .snapshotChanges()
      .pipe(
        map((response) => response.map((flight) => this.assingKey(flight)))
      );
  }

  private assingKey(flight:any) {
    return {...flight.payload.val(), key: flight.key}
  }

  
}
