// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getChatTitles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chat/titles`, { withCredentials: true });
  }
}
