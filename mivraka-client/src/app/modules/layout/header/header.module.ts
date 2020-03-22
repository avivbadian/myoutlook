import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
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
