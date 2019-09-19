import { Component, OnInit } from '@angular/core';
import { customers, environments } from '../customers';
import { FormBuilder } from '@angular/forms';
import { ReplayService } from '../replay.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  customers;
  environments;
  replayForm;
  customer = this.replayService.getCustomer();
  environment = this.replayService.getEnvironment();

  constructor(
    private formBuilder: FormBuilder,
    private replayService: ReplayService) { 

  }

  ngOnInit() {
    this.customers = customers;
    this.environments = environments;
    this.replayForm = this.formBuilder.group({
      customer: this.replayService.getCustomer(),
      environment: this.replayService.getEnvironment()
    });
  }

  onSubmit(replayForm) {
    this.customer = replayForm.customer;
    this.environment = replayForm.environment;
    this.replayService.setCustomer(this.customer);
    this.replayService.setEnvironment(this.environment);

    console.log("Initiating replay for " + replayForm.customer.name + " " + replayForm.environment.name);
  }

}