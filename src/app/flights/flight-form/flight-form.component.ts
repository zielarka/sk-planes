import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crew, Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  @Input() editMode = false;
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

  setFlight(flight: Flight) {
    const {key, ...formData} = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(crewMember?:Crew) {
    this.crew.push(this.bulidCrewMember(crewMember));
    console.log(this.form);
  }

  private bulidCrewMember(crewMember: Crew = {} as Crew) {
     return this.formBulider.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
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
      crew: this.formBulider.array( this.editMode ? [] : [this.bulidCrewMember()])
    })
  }

}
