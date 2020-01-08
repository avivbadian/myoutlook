import { MainModule } from './main/main.module';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './../../app-routing.module';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NewTelegramModule } from './main/new-telegram/new-telegram.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    MatSidenavModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    NewTelegramModule,
    MainModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
