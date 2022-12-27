import { Injectable } from '@angular/core';

//Nos permite injectarlo
@Injectable({
  providedIn: 'root'
})
export class TestCourseService {

  public dataTest:string = 'Hola mundo'

  constructor() { }

  setData(msg:string): void {
    this.dataTest= msg;
  }
}
