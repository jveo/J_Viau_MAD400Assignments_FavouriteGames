import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
//import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content | undefined

  constructor() { 

  }

  ngOnInit(): void {

  }

  displayId(): void{
    console.log(this.content?.id);
    
  }

}
