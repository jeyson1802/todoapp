import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';



@NgModule({
  declarations: [
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ //para usarlo desde la vista HTML
    ReplaceSpacePipe
  ],
  providers: [ //para usarlo desde el component
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
