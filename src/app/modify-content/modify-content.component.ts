import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;

  private headerOptions = {
    headers: new HttpHeaders({
      'content-type': 'application.json'
    })
  }

  constructor() {}

  ngOnInit(): void {}




  addContent(title: string, description: string, creator: string, imgURL: string, type?: string, tags?: string){
    if(title !== '' || description !== '' || creator !== '' || imgURL !== '' || type !== '' || tags){
      this.newGame = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type ? type : '',
        tags: tags?.split(",")
      }
      console.log("successfully added new game, this.newGame");
      this.newGameEvent.emit(this.newGame)
 
    } else { console.log("incomplete fields") }
    
  }

  updateContent(id: string, title: string, description: string, creator: string, imgURL: string, type?: string, tags?: string){
    if(title !== '' || description !== '' || creator !== '' || imgURL !== '' || type !== '' || tags){
      this.newGame = {
        id: parseInt(id),
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type ? type : '',
        tags: tags?.split(",")
      }
      this.updateGameEvent.emit(this.newGame)
      console.log("successfully added new game, this.newGame");
  
    } else { console.log("incomplete fields") }
    
  }
  
}
