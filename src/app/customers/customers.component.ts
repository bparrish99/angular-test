import { Component, OnInit } from '@angular/core';
import { customers } from '../customers';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers;
  customerForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: '',
      urlTag: ''
    });
    this.customers = customers;
  }

  onSubmit(customerData) {
    customers.push(customerData);
  }

  remove(index) {
    customers.splice(index, 1);
  }
}