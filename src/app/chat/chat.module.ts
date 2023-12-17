import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RouterModule } from '@angular/router';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';

@NgModule({
  declarations: [ChatListComponent, ChatDetailComponent],
  imports: [
    CommonModule,
    RouterModule // If you use routing features like routerLink in your components
  ],
  exports: [ChatListComponent] // Export if you need to use it outside this module
})
export class ChatModule { }
