import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegramRowComponent } from './telegram-row.component';



@NgModule({
  declarations: [TelegramRowComponent],
  imports: [
    SharedModule
  ],
  exports: [
    TelegramRowComponent
  ]
})
export class TelegramRowModule { }
