import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, MessageService } from 'primeng/api';
import { TreeService } from '../tree.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-primetree',
  templateUrl: './primetree.component.html',
  styleUrls: ['./primetree.component.css']
})
export class PrimetreeComponent implements OnInit {

  result = {data: {
    name:'abc.doc',
    size:'30kb',
    type:'Document'
  },
  children: []
};


  display: boolean = false;
  displaydialogue:boolean=false;
  files: TreeNode[];
  node:TreeNode;

  Addform:FormGroup;

  selectedNode: TreeNode;

  cols: any[];

  items: MenuItem[];

  private itemCount: number = 1;

  constructor(private nodeService: TreeService, private messageService: MessageService, private fb:FormBuilder) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
  ];

    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
      { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) },
      // { label: 'Add', icon: 'pi pi-sort', command: (event) => this.addChild(this.selectedNode) }
      { label: 'Add', icon: 'pi pi-sort', command: (event) => this.showDialog(this.selectedNode) },
      // { label: 'Delete', icon: 'pi pi-sort', command: (event) => this.delete(this.selectedNode) }
  ];

    this.Addform = this.fb.group({
    name: new FormControl(null,Validators.required),
    size: new FormControl(null,Validators.required),
    type: new FormControl(null,Validators.required)
  });

  }

  createNewItem() {
    this.itemCount++;

    return { text: 'Item ' + this.itemCount };
}

  viewFile(node) {
    this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
}

toggleFile(node) {
    node.expanded = !node.expanded;
    this.files = [...this.files];
}

// addChild(node){
//   this.messageService.add({
//     severity: 'info',
//     summary: 'File Selected',
//     detail: node.data.name + ' - ' + node.data.size
//   });
//   this.result = {data: {
//     name: 'abc.doc',
//     size: '30kb',
//     type: 'Document'
//   },
//   children: []
// };

//   node['children'].push(this.result);
// }

addChild(){
  if(this.Addform.value.name!=null && this.Addform.value.size!=null && this.Addform.value.type!=null){
  this.result = {data: {
    name : this.Addform.value.name,
    size : this.Addform.value.size,
    type : this.Addform.value.type
  },
  children: []
};

  this.node.children.push(this.result);

  this.displaydialogue = false;
  this.Addform.reset();
}
else{
this.messageService.add({severity: 'warn', summary: 'required', detail: 'Fields should not be empty'});
}
}

// delete(node) {
//   this.node=node;
//   console.log(node);
//   if (this.node.parent == null) {
//     this.files.splice(node, 1);
//   } else {
//     let index = this.node.parent.children.indexOf(this.node);
//     this.node.parent.children.splice(index,1);
//   }
// }

add() {
  this.display = true;
}

cancel() {
  this.display = false;
}

showDialog(node) {
  this.displaydialogue = true;
  this.node = node;
}
}
