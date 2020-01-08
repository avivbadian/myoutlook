import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderTelegramContentComponent } from './modules/layout/main/folder-telegram-content/folder-telegram-content.component';
import { NewTelegramComponent } from './modules/layout/main/new-telegram/new-telegram.component';

const routes: Routes = [
  {path: '', component: FolderTelegramContentComponent},
   {path: 'new', component: NewTelegramComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
