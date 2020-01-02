import { CoreModule } from './../../../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle.component';
import { MatSlideToggleModule } from '@angular/material';



@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [
    SharedModule,
    CoreModule,
    MatSlideToggleModule
  ],
  exports: [
    ThemeToggleComponent
  ]
})
export class ThemeToggleModule { }
