import { Injectable } from '@angular/core';
import { gamesList } from '../helper-files/contentDb'
import { Content } from '../helper-files/content-interface'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private messageService: MessageService) { 
  }

  getGames(): Content[]{
    return gamesList
  }

  getGameById(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`)
    return of(gamesList[id])
  }

  getGamesObservable(): Observable<Content[]>{
    this.messageService.add("Content array loaded!")
    return of(gamesList)
  }


}
