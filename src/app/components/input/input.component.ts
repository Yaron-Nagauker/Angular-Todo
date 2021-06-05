import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteModel } from 'src/app/note-model';
import { ListArryService } from '../../list-arry.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() sendClose = new EventEmitter;
  newNote:NoteModel;
  content:string;
  time:any;


  constructor(private listarryservise:ListArryService) { }

  ngOnInit(): void { }

  addNewNote() {
    if (this.content === undefined || this.content === '') {
      return alert('you must wirte something to add new note')
    }

    this.time = Date.now();
    this.newNote = {
      'time':this.time,
      'content':this.content
    }
    this.listarryservise.addNew(this.newNote);
    this.content = undefined;
  }

  CloseInput() {
    this.sendClose.emit();
  }
}
