import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsize'
})
export class EllipsizePipe implements PipeTransform {

  // returns the first 30 characters of the input value and puts ellipsis (...) at the end if number of characters is more than 30
  transform(value: any, limit: number): any {
    if( value.length > limit ) {
      return value.substring(0, limit) + '...';
    } else {
      return value;
    }
  }
}
