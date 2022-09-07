import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ParameterHelper } from './parameter-helper/parameter-helper';
import { SanitizeService } from './sanitizer-text/sanitize.service';
import { TodoDto } from './todo.dto';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { SanitizerTextComponent } from './sanitizer-text/sanitizer-text.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoinputComponent,
    SanitizerTextComponent,
    TextareaComponent
  ],
  providers: [
    ParameterHelper,
    TodoDto,
    SanitizeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
