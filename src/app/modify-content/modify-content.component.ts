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
      console.log('The dialog was closed, results are: ', result);
      let urlRegex = '(https?:\/\/.*\.(?:png|jpg))';
      if(!result.imgURL.match(urlRegex)){
        result.imgURL = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
      } 
      this.newGameEvent.emit(result)
    })
  }

  


  clear(){
    this.newGame = {title: "", description: "", creator: "", imgURL: "", type: "", tags: []}
  }


}
