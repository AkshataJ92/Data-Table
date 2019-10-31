import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { details } from '../details';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx.component.html',
  styleUrls: ['./ngx.component.css']
})
export class NgxComponent implements OnInit {

  arr:details[]=[];
  delarr:details[]=[];

  constructor(private _data:DataserviceService, private modalService: BsModalService) { }

  ngOnInit() {
    this._data.getAllData().subscribe(
      (data:details[])=>{
        this.arr=data;
      }
    );
  }

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}
