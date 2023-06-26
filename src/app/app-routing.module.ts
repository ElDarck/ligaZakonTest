import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilesListComponent} from "./files-list/files-list.component";
import {FileDescriptionComponent} from "./files-list/file-description/file-description.component";

const routes: Routes = [
  { path: 'news', component: FilesListComponent, children: [
      { path: 'post/:id', component: FileDescriptionComponent }
    ] },
  { path: '',   redirectTo: 'news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
