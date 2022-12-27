import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy{

  groups: Array<any> = [];

  constructor(private taskService:TaskService){}

// listObservables$ : Array<Subscription> = [];

  ngOnInit(): void {

    //cuando me suscribo recien estoy recibiendo la informacion
    this.taskService.getTask().subscribe(
      (response) => {
        console.log('--->', response)
      }
    )

    // const observer1$ = interval(1000).subscribe((res) => {
    //   console.log('LLAMANDOOO');
    // });

    // this.listObservables$.push(observer1$);

    // this.groups = [
    //   {
    //     label: 'Nuevos',
    //     color: 'green',
    //     list: [
    //       {
    //         order:'Como instalar Angular',
    //         items: [
    //           {
    //             key:'price',
    //             value:152
    //           },
    //           {
    //             key:'time',
    //             value:152
    //           },
    //           {
    //             key:'author',
    //             value: {
    //               name: 'Leifer Mendez',
    //               avatar: 'https://avatars.githubusercontent.com/u/97020486?v=4'
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Trabajando',
    //     color: 'tomato',
    //     list: [
    //       {
    //         order:'Como desinstalar Angular',
    //         items: [
    //           {
    //             key:'price',
    //             value:188
    //           },
    //           {
    //             key:'time',
    //             value:188
    //           },
    //           {
    //             key:'author',
    //             value: {
    //               name: 'Jeyson Ventura',
    //               avatar: 'https://avatars.githubusercontent.com/u/97020486?v=4'
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  }

  ngOnDestroy(): void {
    console.log('Me voy a destruir');
    // this.listObservables$.forEach((subscription) => {subscription.unsubscribe()});
  }
}
