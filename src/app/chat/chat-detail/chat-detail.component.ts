// chat-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  chat: any; // Adjust the type as needed

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id');
    this.chatService.getChatById(chatId).subscribe(
      data => {
        this.chat = data;
      },
      error => {
        console.error('Error fetching chat details', error);
      }
    );
  }
}
