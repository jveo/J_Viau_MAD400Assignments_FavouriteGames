import { Content } from '../helper-files/content-interface'
import { Component, Input, OnInit, Output } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  gamesList: Content[]

  constructor(private GameService: GameServiceService) {
    this.gamesList = []
  } 
  

  ngOnInit(): void {
    this.getContentFromServer()
  }

  getContentFromServer(): void{
    this.GameService.getContent().subscribe( newGamesFromServer => {
      console.log("recevied content from the server", newGamesFromServer);
      this.gamesList = newGamesFromServer
    })
  }

  addContentToList(game: Content): void {
    this.GameService.addContent(game).subscribe(newGameFromServer => {
      this.gamesList.unshift(newGameFromServer)
      console.log("addContentToList function works");
    });
  }

  updateContentInList(contentItem: Content): void {
    this.GameService.updateContent(contentItem).subscribe(() => {
      console.log("Content updated successfully")
      this.getContentFromServer();
    });
  }


    

  // getContent(): Observable<Content> {
  //   return of(this.GameService.getGameById(1))
  // }
}
