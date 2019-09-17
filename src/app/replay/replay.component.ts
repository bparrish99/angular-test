import { Component, OnInit } from '@angular/core';
import { customers, environments } from '../customers';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  customers;
  environments;
  replayForm;

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.customers = customers;
    this.environments = environments;
    this.replayForm = this.formBuilder.group({
      customerId: 0,
      environmentId: 0
    });
  }

  onSubmit(replayForm) {
    window.alert("Initiating replay for " + customers[replayForm.customerId].name + " " + environments[replayForm.environmentId].name + "   (not really)");
  }

}