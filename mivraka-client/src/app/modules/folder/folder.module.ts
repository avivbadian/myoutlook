import { FolderComponent } from './folder.component';
import { FolderTelegramContentModule } from './folder-telegram-content/folder-telegram-content.module';
import { FolderTelegramsModule } from './folder-telegrams/folder-telegrams.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material';



@NgModule({
  declarations: [FolderComponent],
  imports: [
    SharedModule,
    MatSidenavModule,

    FolderTelegramsModule,
    FolderTelegramContentModule
  ],
  exports: [
    FolderComponent
  ]
})
export class FolderModule { }
