import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    SharedModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
