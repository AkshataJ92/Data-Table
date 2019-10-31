import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from '../datasource';

@Component({
  selector: 'app-synctree',
  templateUrl: './synctree.component.html',
  styleUrls: ['./synctree.component.css']
})
export class SynctreeComponent implements OnInit {

  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  ngOnInit(): void {
      this.data = sampleData;
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
      this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

}
