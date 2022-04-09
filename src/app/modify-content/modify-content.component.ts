import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { GameServiceService } from '../services/game-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame: Content;

  constructor(private dialog: MatDialog) {
      this.newGame = {title: "", description: "", creator: "", imgURL: "", type: "", tags: []}
  }


  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false,
      width: '250px',
      height: '350px',
      data: {
        title: this.newGame.title,
        creator: this.newGame.creator,
        desc: this.newGame.description,
        type: this.newGame.type,
        tags: this.newGame.tags
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.newGame = result;
      console.log(this.newGame);
      this.newGameEvent.emit(this.newGame)
    })
  }

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
      console.log(this.newGame);
      this.newGameEvent.emit(this.newGame)
      this.clear()
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


  clear(){
    this.newGame = {title: "", description: "", creator: "", imgURL: "", type: "", tags: []}
  }


}
