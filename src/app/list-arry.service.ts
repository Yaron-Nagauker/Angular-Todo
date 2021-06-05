import { Injectable } from '@angular/core';
import { NoteModel } from './note-model';


@Injectable({
  providedIn: 'root'
})

export class ListArryService {
  time:any = Date.now();
  note:NoteModel;
  toDoList:NoteModel[] = [];

  constructor() {
    this.toDoList = [
      {'time':this.time, 'content':'Annual sales summary meeting Wednesday 9:30 p.m.'},
      {'time':this.time, 'content':'Coordinating expectations with a client Thursday 13:00'},
      {'time':this.time, 'content':'Finish the presentation by the end of the month'},
    ];
  }

  getList() {
    return this.toDoList;

  }

  addNew(data:NoteModel) {
    this.toDoList.push({
      'time':data.time,
      'content':data.content
    });

  }

  deleteNote(data:NoteModel) {
    this.toDoList = this.toDoList.filter((item:NoteModel) => data.content !== item.content);
  }
}
