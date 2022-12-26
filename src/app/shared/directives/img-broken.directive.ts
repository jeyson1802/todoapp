import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  //Escuchar los eventos de la imagen
  @HostListener('error') handleError(){
    const element = this.elHost.nativeElement;
    element.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    console.log('Algo sucedió', this.elHost.nativeElement);

  }

  constructor(private elHost:ElementRef) { }

}
