import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';




@NgModule({
  imports: [MatCardModule, MatButtonModule, DragDropModule,
    MatGridListModule, MatInputModule,
    MatIconModule],

  exports: [MatCardModule, MatButtonModule, DragDropModule,
    MatGridListModule, MatInputModule,
    MatIconModule]
})
export class MaterialModule { }
