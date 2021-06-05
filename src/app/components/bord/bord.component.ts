import { Component, OnInit } from '@angular/core';
import { ListArryService } from '../../list-arry.service';
import { NoteModel } from '../../note-model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bord',
  templateUrl: './bord.component.html',
  styleUrls: ['./bord.component.scss']
})

export class BordComponent implements OnInit{

  notes:any[];
  note:NoteModel;

  constructor(private listservice:ListArryService) {
    this.notes = this.listservice.getList();
  }

  ngOnInit() {
    this.notes = this.listservice.getList();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }



}
