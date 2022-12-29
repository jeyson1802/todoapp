import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NewTaskService } from '@modules/task/services/new-task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnChanges {

  @Input() data:Array<any> = [];
  @Input() name:string = '';
  @Input() id:string = '';

  constructor(private newTaskService: NewTaskService){
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  addTask():void{
    this.newTaskService.setShow(true, this.id);
  }
}
