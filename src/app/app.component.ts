import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo-App';
  isOpen:boolean = false

  constructor() {}

  OpenInput() {
    return this.isOpen = true;
  }

  closeInput() {
    return this.isOpen = false;
  }
}



