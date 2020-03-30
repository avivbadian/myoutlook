import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    SharedModule,
    MatListModule,
    RouterModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
