import { Component, OnInit } from '@angular/core';
import { customers, environments } from '../customers';
import { FormBuilder } from '@angular/forms';
import { ReplayService } from '../replay.service';
import { ProcessorService } from '../processor.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  customers;
  environments;
  processors;
  replayForm;
  customer = this.replayService.getCustomer();
  environment = this.replayService.getEnvironment();
  processor = this.replayService.getProcessor();

  constructor(
    private formBuilder: FormBuilder,
    private replayService: ReplayService,
    private processorService: ProcessorService) { 

  }

  ngOnInit() {
    this.customers = customers;
    this.environments = environments;
    this.replayForm = this.formBuilder.group({
      customer: this.replayService.getCustomer(),
      environment: this.replayService.getEnvironment(),
      processor: this.replayService.getProcessor()
    });
    console.log("Inititated replay form " + this.replayForm.customer);
    this.getProcessors(this.customer, this.environment);
  }

  getStatus(replayForm) {
    this.customer = replayForm.customer;
    this.environment = replayForm.environment;
    this.processor = replayForm.processor;
    this.replayService.setCustomer(this.customer);
    this.replayService.setEnvironment(this.environment);
    this.replayService.setProcessor(this.processor);

    console.log("Retrieving status for " + replayForm.customer.name + " " + replayForm.environment.name);
  }

  replay(replayForm) {
    this.customer = replayForm.customer;
    this.environment = replayForm.environment;
    this.processor = replayForm.processor;
    this.replayService.setCustomer(this.customer);
    this.replayService.setEnvironment(this.environment);
    this.replayService.setProcessor(this.processor);

    console.log("Initiating replay for " + replayForm.customer.name + " " + replayForm.environment.name);
  }

  getProcessors(customer, environment) {
    if (customer && environment) {
      console.log("Retrieving processors for " + customer.name + " " + environment.name);
      this.processors = this.processorService.getProcessors(customer, environment);
    }
  }

}