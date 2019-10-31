import { Component, OnInit } from '@angular/core';
import { deletearr } from '../deletearr';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

  delarr: deletearr[] = [
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
    new deletearr(1, 'aaa', 'bbb'),
  ];
  arr: any = [];

  constructor() { }

  ngOnInit() {
  }

  checkbox(item) {
    console.log(item);
    this.arr.push(item);
    console.log(this.arr.length);
  }

  deleteAll() {
    var result = confirm("Are you sure?");
    if (result) {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.delarr.find(x => x == this.arr[i])) {
          this.delarr.splice(this.delarr.indexOf(this.arr[i]), 1);
        }
      }
    }
  }
}


