import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { details } from '../details';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit {

  detail: details[] = [];

  constructor(private _data: DataserviceService,
              public dialogRef: MatDialogRef<ConfirmdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: details) {}


    ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(){
    // console.log('id:', id);
  }


}
