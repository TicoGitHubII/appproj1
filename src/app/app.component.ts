import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav = {title : 'Appproj1'}
  title = 'Title'
  field1: {
    name: "tico"
    text:" hi"

  }

  onMediaItemDelete(){

  }
}
