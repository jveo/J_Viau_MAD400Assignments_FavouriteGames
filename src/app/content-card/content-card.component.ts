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

    let cod: Content = {
        id: 1,
        title: "Call Of Duty",
        description: "FPS Game",
        creator: "Activision",
        imgURL: "https://tpucdn.com/review/call-of-duty-modern-warfare-benchmark-test-performance-analysis/images/title.jpg",
        tags: ["FPS", "Competitive"]
    }

    let wow: Content = {
      id: 2,
      title: "World Of Warcraft",
      description: "MMORPG",
      creator: "Blizzard",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg",
      tags: ["MMO"]
    }

    let osrs: Content = {
      id: 3,
      title: "Old School RuneScape",
      description: "MMORPG",
      creator: "Jagex",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMp21CIabjoE9hB1VQuxd_dovqij3niMmzg&usqp=CAU",
      tags: ["MMO"]
    }



    this.myList = new ContentList(osrs)
    this.myList.addItem(cod)
    this.myList.addItem(wow)

  }



  ngOnInit(): void {
  }

}
