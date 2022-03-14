import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface'
import { GameServiceService } from './services/game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameServiceService]
})
export class AppComponent {
  title = 'J_Viau_FavouriteGames';

  gamesList: Content[] = []

  constructor(public gameService: GameServiceService) {
    
  }

}


