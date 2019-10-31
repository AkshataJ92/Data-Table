import { Component, OnInit } from '@angular/core';
import { details } from '../details';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-multihttp',
  templateUrl: './multihttp.component.html',
  styleUrls: ['./multihttp.component.css']
})
export class MultihttpComponent implements OnInit {

  arr:details[]=[];
  delarr:details[]=[];

  constructor(private _data:DataserviceService) { }

  ngOnInit() {
    this._data.getAllData().subscribe(
      (data:details[])=>{
        this.arr=data;
      }
    );
  }

  checkboxChange(item: details) {
    if (this.delarr.find(x => x == item)) {
    this.delarr.splice(this.delarr.indexOf(item), 1)
    } else {
    this.delarr.push(item);
    }
    }

    i: number = 0;

deleteAll() {
this._data.deleteData(this.delarr).subscribe(
(data: any) => {
for (this.i = 0; this.i < this.delarr.length; this.i++) {
if (this.arr.find(x => x == this.delarr[this.i])) {
this.arr.splice(this.arr.indexOf(this.delarr[this.i]), 1);
}
}
});
}
}
