import { TelegramsService } from './../../../core/telegrams.service';
import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Telegram } from 'src/app/modules/models/telegram';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-folder-telegrams',
  templateUrl: './folder-telegrams.component.html',
  styleUrls: ['./folder-telegrams.component.scss']
})
export class FolderTelegramsComponent implements OnInit, OnDestroy {
  @ViewChild('grid', {static: false}) myGrid: jqxGridComponent;
  telegrams$: Observable<Telegram[]>;
  telegrams: Telegram[];
  currentFolder: number;
  subscription: Subscription;
  dataAdapter: any;

  fruits: string[] = ['Apple', 'Orange', 'Banana'];

  constructor(
    private telegramsService: TelegramsService
  ) { }

  ngOnInit() {
    this.subscription = this.telegramsService.currentFolder$.subscribe(
      currentFolder => {
        this.currentFolder = currentFolder;
        this.telegrams$ = this.telegramsService.getTelegrams(currentFolder);
        this.telegrams$.subscribe(te => {
        });
      });

  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }
}
