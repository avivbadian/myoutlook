import { TelegramsService } from './../../../core/telegrams.service';
import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Telegram } from 'src/app/modules/models/telegram';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-folder-telegrams',
  templateUrl: './folder-telegrams.component.html',
  styleUrls: ['./folder-telegrams.component.scss']
})
export class FolderTelegramsComponent implements OnInit, OnDestroy {
  @ViewChild('grid', {static: false}) myGrid: jqxGridComponent;
  @Input() telegrams: Telegram[];

  currentFolder: number;
  subscription: Subscription;

  constructor(
    private telegramsService : TelegramsService
  ) { }

  ngOnInit() {
    this.subscription = this.telegramsService.currentFolder$.subscribe(currentFolder =>
       this.currentFolder = currentFolder);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
