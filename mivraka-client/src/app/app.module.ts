import { FoldersService } from './modules/folders.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FolderComponent } from './modules/folder/folder.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatListModule } from '@angular/material';
import { NewTelegramComponent } from './modules/new-telegram/new-telegram.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    NewTelegramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [FoldersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
