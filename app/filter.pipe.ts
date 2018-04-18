import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], term: any): any {

    if (term === undefined){
      return value;
    }

    return value.filter(function (item) {
      return item.Name.toLowerCase().includes(term.toLowerCase());
    });
  }

}



