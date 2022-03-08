import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>()
  newGame?: Content;

  constructor() { }

  ngOnInit(): void {
    
  }

  addGameContent(id: number, title: string, desc: string, creator: string, img: string, type: string, tags: string){
    this.newGame = {
      id: id,
      title: title,
      description: desc,
      creator: creator,
      imgURL: img,
      type: type,
      tags: tags.split(',')
    }
    console.log('added game(s)');
    this.newGameEvent.emit(this.newGame)
  }

  // addGameContent(id: number, title: string, desc: string, creator: string, img: string, type: string, tags: string){
  //   return new Promise( (resolve, reject) => {
  //     if(this.newGame){
  //       this.newGame = {
  //         id: id,
  //         title: title,
  //         description: desc,
  //         creator: creator,
  //         imgURL: img,
  //         type: type,
  //         tags: tags.split(',')
  //       }
  //       this.newGameEvent.emit(this.newGame)
  //       resolve(this.isSuccessful(true, title))
  //     } else {
  //       reject(this.isSuccessful(false, title))
  //     }
  //   }).then((result) => {
  //     console.log(result);
  //   }).catch((err) => {
  //     console.log(err);
      
  //   });
  // }


  isSuccessful(bool: Boolean, title: string){return bool ? console.log(`Successfully added New Game: ${title}`) : console.log(`Failed to add: ${title}`);}
  


}

