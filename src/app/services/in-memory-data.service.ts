import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { CONTENT} from '../helper-files/contentDb'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
      const content: Content[] = CONTENT;
      return {content};
  }
  
  genId(content: Content[]): number{
    if(content.length > 0){
      return Math.max(...content.map(v => v.id ?? 0)) + 1 
    } else {
      return 2000
    }

  }


  

}
