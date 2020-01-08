import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DestinationToStringPipe } from './destination-to-string.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  declarations: [DestinationToStringPipe]
})
export class SharedModule { }
