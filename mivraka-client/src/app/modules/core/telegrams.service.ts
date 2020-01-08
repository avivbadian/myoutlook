import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramsService {
  private currentFolder: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currentFolder$: Observable<number> = this.currentFolder.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setCurrentFolder(folderId : number) {
    this.currentFolder.next(folderId);

    // Later this will come from a server
    if (folderId == 1) {
      return this.http.get('/assets/inbox.json');
    }
    if (folderId == 3) {
      return this.http.get('/assets/drafts.json')
    }
  }
}


