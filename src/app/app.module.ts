import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import {  MatDialogModule, MatCheckboxModule, MatTreeModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { DeleteallComponent } from './deleteall/deleteall.component';
import { routing } from './app.routing';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { MultihttpComponent } from './multihttp/multihttp.component';
import { NgxComponent } from './ngx/ngx.component';
import { PipesPipe } from './pipes.pipe';
import { TreetableComponent } from './treetable/treetable.component';
import { PrimetreeComponent } from './primetree/primetree.component';
import {TreeTableModule} from 'primeng/treetable';
import { HttpModule } from '@angular/http';
import {ContextMenuModule} from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { DialogModule } from 'primeng/primeng';
import { SynctreeComponent } from './synctree/synctree.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ConfirmdialogComponent,
    MenuComponent,
    DeleteallComponent,
    MultiselectComponent,
    MultihttpComponent,
    NgxComponent,
    PipesPipe,
    TreetableComponent,
    PrimetreeComponent,
    SynctreeComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    routing,
    MatCheckboxModule,
    MatSortModule,
    MatTreeModule,
    TreeTableModule,
    HttpModule,
    ContextMenuModule,
    DialogModule,
    ToastModule,
    ModalModule,
    ModalModule.forRoot(),
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule,

  ],
  entryComponents: [DataComponent, ConfirmdialogComponent],
  providers: [MessageService, BsModalService, BsModalRef,PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
