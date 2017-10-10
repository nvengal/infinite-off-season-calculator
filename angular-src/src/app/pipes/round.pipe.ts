import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(weight: any): any {
    if (isNaN(weight)) {
      return weight;
    }
    weight = parseFloat(weight);
    return (Math.round(weight - weight % 5)).toString();
  }

}
