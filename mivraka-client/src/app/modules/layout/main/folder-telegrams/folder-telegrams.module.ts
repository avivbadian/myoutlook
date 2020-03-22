import { TelegramRowModule } from './telegram-row/telegram-row.module';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { FolderTelegramsComponent } from './folder-telegrams.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';




@NgModule({
  declarations: [FolderTelegramsComponent],
  imports: [
    MatListModule,
    SharedModule,
    TelegramRowModule,
    jqxGridModule
  ],
  exports: [
    FolderTelegramsComponent
  ]
})
export class FolderTelegramsModule { }
