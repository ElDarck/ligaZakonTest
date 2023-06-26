import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateElementFormComponent } from './create-element-form/create-element-form.component';
import { SliderComponent } from './slider/slider.component';
import {MatIconModule} from "@angular/material/icon";
import {FilesListComponent} from "./files-list/files-list.component";
import {FileDescriptionComponent} from "./files-list/file-description/file-description.component";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateElementFormComponent,
    SliderComponent,
    FilesListComponent,
    FileDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
