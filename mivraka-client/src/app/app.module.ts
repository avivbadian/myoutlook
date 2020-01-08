import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { FolderTelegramContentModule } from './modules/layout/main/folder-telegram-content/folder-telegram-content.module';
import { LayoutModule } from './modules/layout/layout.module';
import { CoreModule } from './modules/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FolderTelegramContentModule,
    jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
