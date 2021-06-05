import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NoteModel } from '../../note-model';
import { ListArryService } from '../../list-arry.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note:NoteModel;
  removeData:NoteModel;
  @Output() emitToBord = new EventEmitter;

  constructor(private listarrysrevice:ListArryService) {

  }

  ngOnInit():void {

  }

  remove() {
    this.removeData = {
      'time':this.note.time,
      'content':this.note.content
    }
    this.listarrysrevice.deleteNote(this.removeData);
    this.emitToBord.emit();
  }


}
