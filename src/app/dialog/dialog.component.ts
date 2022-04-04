import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Content } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame: Content

  constructor(public dialog: MatDialog) { 
    this.newGame = {title: "", description: "", creator: "", imgURL: "", type: "", tags: []}
  }

  ngOnInit(): void {

  }

  openDialog(){
    const dialogRef = this.dialog.open(ModifyContentComponent, {
      data: {
        data: this.newGame
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.newGame = {title: result.data.title, description: result.data.description, creator: result.data.creator, imgURL: result.data.imgURL, type: result.data.type, tags: result.data.tags};
    });
    
  }

  

  
}
