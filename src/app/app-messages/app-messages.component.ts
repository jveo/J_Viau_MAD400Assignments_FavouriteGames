import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {

  

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }


}
