import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {

  showText = true;

  mostrarTexto(){
    this.showText = !this.showText;
  }

}
