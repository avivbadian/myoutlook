import { NgModule } from '@angular/core';
import { TelegramRowComponent } from './telegram-row.component';
import { SharedModule } from 'src/app/shared/shared.module';



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
