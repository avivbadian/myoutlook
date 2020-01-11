import { TelegramsService } from './../../../core/telegrams.service';
import { Component, OnInit, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Telegram } from 'src/app/modules/models/telegram';

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
}

@Component({
  selector: 'app-folder-telegrams',
  templateUrl: './folder-telegrams.component.html',
  styleUrls: ['./folder-telegrams.component.scss']
})
export class FolderTelegramsComponent implements OnInit, OnDestroy {
  telegrams$: Observable<Telegram[]>;
  telegrams: Telegram[];
  selectedTelegrams: number[];
  selectedRowIndex: number;
  currentFolder: number;
  subscription: Subscription;
  dataAdapter: any;

  constructor(
    private telegramsService: TelegramsService
  ) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
        
    }
  }

  ngOnInit() {
    this.selectedTelegrams = [];
    this.subscription = this.telegramsService.currentFolder$.subscribe(
      currentFolder => {
        this.currentFolder = currentFolder;
        this.telegrams$ = this.telegramsService.getTelegrams(currentFolder);
      });
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  telegramSelected(id: number, rowIndex: number, numOfRows: number) {
    this.selectedTelegrams = [id];
    if (rowIndex >= 0 && rowIndex <= numOfRows - 1) {
      this.selectedRowIndex = rowIndex;
    }
  }

  checkSelected(id: number) {
    return this.selectedTelegrams.indexOf(id) > -1;
  }
}
