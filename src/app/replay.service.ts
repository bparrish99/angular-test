import { Injectable } from '@angular/core';
import { customers, environments } from './customers';

@Injectable()
export class ReplayService {

  private customer;
  private environment;
  private processor;

  constructor() { }

  getCustomer() {
    return this.customer;
  }

  getEnvironment() {
    return this.environment;
  }

  getProcessor() {
    return this.processor;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  setEnvironment(environment) {
    this.environment = environment;
  }

  setProcessor(processor) {
    this.processor = processor;
  }
  
}