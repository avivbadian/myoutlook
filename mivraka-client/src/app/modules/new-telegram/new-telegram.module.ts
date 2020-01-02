import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTelegramComponent } from './new-telegram.component';

@NgModule({
  declarations: [NewTelegramComponent],
  imports: [
    SharedModule
  ]
})
export class NewTelegramModule { }
