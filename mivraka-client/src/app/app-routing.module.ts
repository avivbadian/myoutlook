import { NewTelegramComponent } from './modules/new-telegram/new-telegram.component';
import { FolderComponent } from './modules/folder/folder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FolderComponent},
   {path: 'folders/:folderId', component: FolderComponent },
   {path: 'new', component: NewTelegramComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
