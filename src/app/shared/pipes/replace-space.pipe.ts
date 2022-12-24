import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO
  transform(value:string, args:string): string {
    value = value.split(' ').join(args).toLowerCase();
    return value;
  }

}
