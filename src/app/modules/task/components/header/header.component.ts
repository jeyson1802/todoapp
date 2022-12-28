import { Component, OnInit } from '@angular/core';
import { NewTaskService } from '@modules/task/services/new-task.service';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Link',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(public testCourService:TestCourseService, public newTaskService:NewTaskService){
  }

  ngOnInit(): void {
  }

  abrirModal() : void {
    this.newTaskService.setShow(true);
  }
}
