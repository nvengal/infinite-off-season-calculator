import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(weight: any): any {
    weight = parseFloat(weight);
    return (Math.round(weight - weight % 5)).toString();
  }

}
