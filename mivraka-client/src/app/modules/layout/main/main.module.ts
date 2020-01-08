import { MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FolderTelegramsModule } from './folder-telegrams/folder-telegrams.module';
import { FolderTelegramContentModule } from './folder-telegram-content/folder-telegram-content.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MatSidenavModule,
    FolderTelegramsModule,
    FolderTelegramContentModule
  ]
})
export class MainModule { }
