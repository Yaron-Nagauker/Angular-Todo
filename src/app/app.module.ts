import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { MaterialModule } from './material/material.module'
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { BordComponent } from './components/bord/bord.component';
import { InputComponent } from './components/input/input.component';
import { NoteComponent } from './components/note/note.component';
import { ListArryService } from './list-arry.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BordComponent,
    InputComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ListArryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
