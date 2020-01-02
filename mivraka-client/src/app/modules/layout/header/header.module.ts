import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ThemeToggleModule } from 'src/app/modules/layout/header/theme-toggle/theme-toggle.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ThemeToggleModule,
    SharedModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
