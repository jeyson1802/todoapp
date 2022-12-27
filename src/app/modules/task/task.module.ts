import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { ColumnComponent } from './components/column/column.component';


@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent,
    ColumnComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
