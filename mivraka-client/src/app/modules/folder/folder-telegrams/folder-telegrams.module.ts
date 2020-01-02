import { TelegramRowComponent } from './telegram-row/telegram-row.component';
import { TelegramRowModule } from './telegram-row/telegram-row.module';
import { MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTelegramsComponent } from './folder-telegrams.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FolderTelegramsComponent],
  imports: [
    MatListModule,
    SharedModule,
    TelegramRowModule
  ],
  exports: [
    FolderTelegramsComponent
  ]
})
export class FolderTelegramsModule { }
