import { Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { details } from '../details';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger, MatSort } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  detail: details[] = [];
  collid: number;
  collegename: string;
  department: string;

  displayedColumns: string[] = ['select','id', 'name', 'description'];
  @ViewChild(MatMenuTrigger, { static: false }) contextMenu: MatMenuTrigger;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  contextMenuPosition = { x: '0px', y: '0px' };

  dataSource =  new MatTableDataSource<details>();
  selection = new SelectionModel<details>(true, []);
  data = Object.assign( details);

  constructor(private _data: DataserviceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
    this.fetchData();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  fetchData(){
    this._data.getAllData().subscribe(
      (data: details[]) => {
        this.detail = data;
        this.dataSource = new MatTableDataSource<details>(this.detail);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.openMenu();
  }

  Edit(item) {
    this.collid=item.id;
    this.collegename=item.name;
    this.department=item.description;
  }

  AddCollege(f:NgForm){
    this._data.addData(f.value).subscribe((data:any) => {
      this._data.getAllData().subscribe(
        (data:details[])=>
        {
         this.detail=data
        }

      );
      alert("College added");
    });
  }

  removeSelectedRows() {

    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '250px',
      //data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.collid = result;
      this.selection.selected.forEach(item => {
      let index: number = this.detail.findIndex(d => d === item);
      console.log(this.detail.findIndex(d => d === item));
      this.detail.splice(index,1)
      this.dataSource = new MatTableDataSource<details>(this.detail);
    });
      this.selection = new SelectionModel<details>(true, []);
  });
  }

openDialog(id: number): void {
  console.log('selectedid:', id);
  const dialogRef = this.dialog.open(ConfirmdialogComponent, {
    width: '250px',
    data: { id: id }
  });

  dialogRef.afterClosed().subscribe(result => {
     this.collid = result;
     this._data.deleteData(id).subscribe(
      ()=>{
        alert('deleted');
        this.fetchData();
      }
    );
  });

}

UpdateCollege(f1){
  var req={
    id:f1.value.id,
    name:f1.value.name,
    description:f1.value.description
  }
  this._data.addData(req).subscribe((data:any) => {
    this.ngOnInit();
    this._data.getAllData().subscribe(
      (data:details[])=>
      {
       this.detail=data
      }

    );
    alert("record edited");

  });
}


private setCurrentTime() {
  const time = new Date(Date.now());
  this.hours = this.leftPadZero(time.getHours());
  this.minutes = this.leftPadZero(time.getMinutes());
  this.seconds = this.leftPadZero(time.getSeconds());
}

private updateTime() {
  setInterval(() => {
    this.setCurrentTime();
  }, 1000);
}

private leftPadZero(value: number) {
  return value < 10 ? `0${value}` : value.toString();
}
}

