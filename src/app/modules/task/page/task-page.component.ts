import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit{

  listUser:Array<{id:string, name:string}> = [
    {
      id:'1',
      name:'Leifer'
    },
    {
      id:'2',
      name:'Maria'
    },
    {
      id:'3',
      name:'Pedro'
    }
  ]

  ngOnInit(): void {
  }
}
