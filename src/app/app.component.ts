import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Content } from './helper-files/content-interface'
import { GameServiceService } from './services/game-service.service';
import { LogUpdateService } from './services/log-update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameServiceService]
})
export class AppComponent {
  
  title = 'J_Viau_FavouriteGames';

  constructor(private logService: LogUpdateService, private appRef: ApplicationRef, private updates: SwUpdate) {
    
  }

  ngOnInit(){
    this.logService.init()
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe( () => this.updates.checkForUpdate());
  }
  
}


