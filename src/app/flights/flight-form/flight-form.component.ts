import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crew } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label:'Stwaredess', value: 'stwaredess'},
    { label:'Senior Cabin Crew', value: 'senior_cabin_crew'},
    { label:'Pilot', value: 'pilot'},
    { label:'Co-Pilot', value: 'co_pilot'},
    { label:'Mechanic', value: 'mechanic'},
  ]

  constructor(private formBulider: FormBuilder) { }

  ngOnInit() {
    this.bulidForm();
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember() {
    this.crew.push(this.bulidCrewMember());
    console.log(this.form);
  }

  private bulidCrewMember() {
     return this.formBulider.group({
      name: '',
      job: ''
     });
  }

  private bulidForm() {
    this.form = this.formBulider.group({
      origin: ['',{ validators: [Validators.required]}],
      destination: ['',{ validators: [Validators.required]}],
      departureTime: ['',{ validators: [Validators.required]}],
      returnTime: ['',{ validators: [Validators.required]}],
      code: ['',{ validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)]}],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBulider.array([this.bulidCrewMember()])
    })
  }

}
