import { Component, OnInit } from '@angular/core';
import { ChatService } from './../app/chat-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;
  messages: object[]=[] ;
  cards: object[] = [];
  isWatsonResponded:any;
  
  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
   // this.chatService.currentMessage.subscribe(message => this.isWatsonResponded = message)
      this.chatService
      .getMessages()
      .subscribe((message: any ) => {
        this.messages.push(message);
        console.log(this.messages);
      });

  }


}
