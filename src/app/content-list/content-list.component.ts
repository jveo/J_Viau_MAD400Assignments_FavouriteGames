import { Content } from '../helper-files/content-interface'
import { Component, Input, OnInit, Output } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';
import { Observable, of } from 'rxjs';

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
    this.GameService.getGamesObservable().subscribe(games => this.gamesList = games)
  }

  doesExist(searchGenre?: String){
    searchGenre = searchGenre?.toLowerCase()
      if(this.gamesList.some(e => e.type?.toLowerCase() == searchGenre)){
        alert(`Search for ${searchGenre} does exist`)
      } else if(searchGenre === "") {
        alert("invalid entry")
      } else {
        alert("not found")
      }
  }
    
  getGameContent($event: Content){
    this.gamesList.unshift($event)
  }

  // getContent(): Observable<Content> {
  //   return of(this.GameService.getGameById(1))
  // }
}
