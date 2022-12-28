import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewTaskService } from '@modules/task/services/new-task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask:FormGroup = new FormGroup({})
  showModal$ = this.newTaskService.showModal$;
  formItemsGroup$ = this.newTaskService.itemsFormGroup$;

  constructor(
    public newTaskService:NewTaskService,
    ) { }

  ngOnInit(): void {
    this.newTask = new FormGroup(
      {
        order: new FormControl(''),
        item: new FormArray(this.initItemsGroup())
      }
    )
  }

  initItemsGroup():any{
    const items =       [
      new FormGroup(
        {
          key: new FormControl('Precio'),
          value: new FormControl('', [Validators.required, Validators.max(9000)])
        }
      ),
      new FormGroup(
        {
          key: new FormControl('Observacion'),
          value: new FormControl('')
        }
      )
    ]

    this.newTaskService.setFormGroup(items)
    return items
  }

  // método que se usa en el HTML pero que no es optimo consume más memoria
  getItems():any{
    console.log(`Llamando 👌👌👌`)
    const list = this.newTask.get('item') as FormArray
    return list.controls
  }


  saveTask():void{
    const body =  this.newTask.value
    this.newTaskService.saveTask(body)
    .subscribe((response) => {
      this.newTaskService.setShow(false)
      console.log('La tarea se guardo!!!')
    })
  }

  cancel():void{
    this.newTaskService.setShow(false)
  }
}
