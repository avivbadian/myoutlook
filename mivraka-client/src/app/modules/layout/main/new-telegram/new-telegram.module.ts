import { NgModule } from '@angular/core';
import { NewTelegramComponent } from './new-telegram.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewTelegramComponent],
  imports: [
    SharedModule
  ]
})
export class NewTelegramModule { }
