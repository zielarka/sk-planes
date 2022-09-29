import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBulider: FormBuilder) { }

  ngOnInit() {
    this.bulidForm();
  }

  private bulidForm() {
    this.form = this.formBulider.group({
      code: '',
      origin: '',
      destination: '',
      departureTime: '',
      returnTime: '',
      additionalInformation: '',
      withSKPlanesDiscount: false

    })
  }

}
