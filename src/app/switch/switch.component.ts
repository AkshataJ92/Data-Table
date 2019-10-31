import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  people: any[] = [
    {
      "name": "Anil Singh",
      "age": 29,
       "country": 'IN'
    },
    {
      "name": "Alok Singh",
      "age": 33,
       "country": 'USA'
    },
    {
      "name": "Raju",
      "age": 28,
       "country": 'UK'
    },
    {
      "name": "Dilip Singh",
      "age": 34,
       "country": 'NP'
    },
    {
      "name": "Param Trip",
      "age": 32,
       "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
