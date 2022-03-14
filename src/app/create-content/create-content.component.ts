import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter<Content>()
  newGame: Content;
  errorMsg: string = "";

  constructor() { 
    this.newGame = {id: 0, title: '', description: '', creator: '', imgURL: ''}
  }

  ngOnInit(): void {
    
  }

  addGameContent(){
    return new Promise( (res, rej) => {
      if(!this.newGame){
        rej("bad entry")
      }
        res("successfully added new game")
        this.newGameEvent.emit(this.newGame)
    }).then((result) => {
      this.newGame = {id: 0, title: '', description: '', creator: '', imgURL: ''}
    }).catch((err) => {
      this.errorMsg = err
    });
  }
  


  isSuccessful(bool: Boolean, title: string){return bool ? console.log(`Successfully added New Game: ${title}`) : console.log(`Failed to add: ${title}`);}
  


}

