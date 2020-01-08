import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Telegram } from '../models/telegram';

@Injectable({
  providedIn: 'root'
})
export class TelegramsService {
  private currentFolder: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentFolder$: Observable<number> = this.currentFolder.asObservable();
  constructor(
    private http: HttpClient
  ) { }

  setCurrentFolder(folderId: number) {
    this.currentFolder.next(folderId);
  }

  getTelegrams(id: number): Observable<Telegram[]> {
    // Later this will come from a server
    if (id === 1) {
      return this.http.get<Telegram[]>('/assets/inbox.json');
    }
    if (id === 3) {
      return this.http.get<Telegram[]>('/assets/drafts.json');
    }
  }
}


