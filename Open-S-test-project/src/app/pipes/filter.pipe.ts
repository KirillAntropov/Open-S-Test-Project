import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName',
})
export class FilterPipe implements PipeTransform {

  transform(purchases: any, search: string): any {
    return purchases.filter((el: any) => el.name.toLowerCase().includes(search.toLowerCase()));
  }


}
