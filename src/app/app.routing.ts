import { Routes,RouterModule } from "@angular/router";
import { DataComponent } from './data/data.component';
import { DeleteallComponent } from './deleteall/deleteall.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { MultihttpComponent } from './multihttp/multihttp.component';
import { NgxComponent } from './ngx/ngx.component';
import { TreetableComponent } from './treetable/treetable.component';
import { PrimetreeComponent } from './primetree/primetree.component';
import { SynctreeComponent } from './synctree/synctree.component';
import { SwitchComponent } from './switch/switch.component';

const arr : Routes=[
  {path:'', component:DataComponent},
  {path:'delete', component:DeleteallComponent},
  {path:'multi', component:MultiselectComponent},
  {path:'multihttp', component:MultihttpComponent},
  {path:'ngx', component:NgxComponent},
  {path:'treetable', component:TreetableComponent},
  {path:'primetree', component:PrimetreeComponent},
  {path:'synctree', component:SynctreeComponent},
  // {path:'switch', component:SwitchComponent}
];

export const routing=RouterModule.forRoot(arr);
