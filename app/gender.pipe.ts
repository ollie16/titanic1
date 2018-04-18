import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any[], genderterm: any): any {

    if (genderterm === undefined){
      return value;
    }

    return value.filter(function(item1) {
      return item1.Sex.toLowerCase().includes(genderterm.toLowerCase());
    });
  }

}

