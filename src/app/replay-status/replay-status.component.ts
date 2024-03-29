import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-status',
  templateUrl: './replay-status.component.html',
  styleUrls: ['./replay-status.component.css']
})
export class ReplayStatusComponent implements OnInit {

  @Input() customer;
  @Input() environment;
  @Input() processor;
  
  constructor() { }

  ngOnInit() {
  }

}