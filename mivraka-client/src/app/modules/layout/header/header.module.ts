import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule } from '@angular/material';
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
