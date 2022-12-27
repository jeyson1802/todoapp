import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input,OnInit,Renderer2,ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('inicializado');

  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor(private render2:Renderer2) { }

  ngOnInit(): void {
    console.log('Holaa soy un Card Creado!! 😉', this.elementRefId);
    interval(1000).subscribe((evento) => {
      this.idOrder = Date.now();
    });
  }

  //cargado cuando la vista esta cargada / se usa para aplicar estilos o comportamientos de manera dinamica al terminar la carga
  ngAfterViewInit(): void {
    console.log('Holaa soy un Card Creado!! 😉', this.elementRefId);
    const elementTitle = this.elementRefId.nativeElement;
    this.render2.setStyle(elementTitle, 'color', 'red');
  }

  //cuando la vista sufra un cambio el HTML / animaciones / librerias externas
  ngAfterViewChecked(): void {
    console.log('Holaa soy un Card Modificado!! 😉', this.elementRefId);
  }

  sendData():void{
  }

}
