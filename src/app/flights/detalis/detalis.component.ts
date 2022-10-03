import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent {
  flight:Flight;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetalisComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight
  ) { 
    this.flight = data;
  }

  close() {
    this.dialogRef.close();
  }

  goToEditFlight() {
    this.close();
    this.router.navigate(['/dashboard/flights', this.flight.key]);
  }
}
