import { Injectable } from '@angular/core';

//Nos permite injectarlo
@Injectable({
  providedIn: 'root'
})
export class TestCourseService {

  public dataTest:string = 'Task'

  constructor() { }

  setData(msg:string): void {
    this.dataTest= msg;
  }
}
