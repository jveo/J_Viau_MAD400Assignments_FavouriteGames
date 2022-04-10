import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gameService: GameServiceService) {}

  id?: number
  specificGame?: Content;

  ngOnInit(): void {
    this.route.paramMap.subscribe(id => {
      if(!id.get('id')){
        console.error('invalid Id')
      }
      
      this.id = Number(id.get('id')) - 1
      this.gameService.getGameById(this.id).subscribe(game => {
        this.specificGame = game || 0
      })
      
      
    })
  }

}
