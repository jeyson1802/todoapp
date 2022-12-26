import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit{

  results:Array<string> = [
    'Respuesta 1',
    'Respuesta 2',
    'Respuesta 3',
    'Respuesta 4'
  ]

  ngOnInit(): void {
  }
}
