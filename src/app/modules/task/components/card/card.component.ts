import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input,OnChanges,OnInit,Renderer2,SimpleChanges,ViewChild } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck, OnChanges {

  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('inicializado');

  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor(
    // private render2:Renderer2
    private testCourService:TestCourseService
    ) { }

  ngOnInit(): void {
    // console.log('Holaa soy un Card Creado!! 😉', this.elementRefId);
    // interval(1000).subscribe((subscription) => {
    //   this.idOrder = Date.now();
    // })
  }

  //cargado cuando la vista esta cargada / se usa para aplicar estilos o comportamientos de manera dinamica al terminar la carga
  ngAfterViewInit(): void {
    // console.log('Holaa soy un Card Creado!! 😉', this.elementRefId);
    // const elementTitle = this.elementRefId.nativeElement;
    // this.render2.setStyle(elementTitle, 'color', 'red');
  }

  //cuando la vista sufra un cambio el HTML / animaciones / librerias externas
  ngAfterViewChecked(): void {
    // console.log('Holaa soy un Card Modificado!! 😉', this.elementRefId);
  }

  //Cambios en los atributos del componente y de los hijos
  ngDoCheck(): void {
    // console.log('Holaa soy el Docheck!! 😉');
  }

  //Se ejecuta solo cuando vienen los datos del padre
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  sendData():void{
    this.testCourService.setData('Hola desde Card');
  }

}
