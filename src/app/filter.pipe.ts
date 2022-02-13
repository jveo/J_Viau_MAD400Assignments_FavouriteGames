import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: String){
    return contentArray.filter( content => content.type == type)
  }

}
