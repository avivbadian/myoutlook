import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FolderTelegramsModule } from './folder-telegrams/folder-telegrams.module';
import { FolderTelegramContentModule } from './folder-telegram-content/folder-telegram-content.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MatSidenavModule,
    FolderTelegramsModule,
    FolderTelegramContentModule,
    RouterModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
