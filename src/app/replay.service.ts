import { Injectable } from '@angular/core';
import { customers, environments } from './customers';

@Injectable()
export class ReplayService {

  private customer;
  private environment;

  constructor() { }

  getCustomer() {
    return this.customer;
  }

  getEnvironment() {
    return this.environment;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  setEnvironment(environment) {
    this.environment = environment;
  }

}