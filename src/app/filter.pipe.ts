import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: String){
    return type ? contentArray.filter( content => content.type == type) : contentArray
  }

}
