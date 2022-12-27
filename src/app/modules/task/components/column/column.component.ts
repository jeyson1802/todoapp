import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnChanges {

  @Input() data:Array<{id:string, name:string}> = [];

  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('quiero ver los cambios ==> ' , changes)
  }

  ngOnInit(): void {
  }

}
