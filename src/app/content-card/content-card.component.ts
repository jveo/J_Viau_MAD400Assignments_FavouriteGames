import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  myList: ContentList

  constructor() { 

    this.myList = new ContentList({
      id: 1,
      title: "Call Of Duty",
      description: "FPS Game",
      creator: "Activision",
      imgURL: "https://www.giantbomb.com/a/uploads/scale_medium/33/338034/3310517-8598741925-apps.31712.14231872788446538.ec1df70e-1780-4ec2-90fc-de130713250f.37f86b3f-4921-4955-902e-3325f37a3e17.jpg",
      tags: ["FPS", "Competitive"]
    })

    this.myList = new ContentList({
      id: 2,
      title: "World Of Warcraft",
      description: "MMORPG",
      creator: "Blizzard",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg",
      tags: ["MMO"]
    })

    this.myList = new ContentList({
      id: 3,
      title: "Old School RuneScape",
      description: "MMORPG",
      creator: "Jagex",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMp21CIabjoE9hB1VQuxd_dovqij3niMmzg&usqp=CAU",
      tags: ["MMO"]
    })

  }

  ngOnInit(): void {
  }

}
