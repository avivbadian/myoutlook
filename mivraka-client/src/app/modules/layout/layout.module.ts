import { NewTelegramModule } from './../new-telegram/new-telegram.module';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './../../app-routing.module';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FolderModule } from '../folder/folder.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    MatSidenavModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FolderModule,
    NewTelegramModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
