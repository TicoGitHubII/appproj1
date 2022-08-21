import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() expectProp: {title:string};
 @Output() delete = new EventEmitter();

constructor() { }

  onDelete(){
     alert("Delete Emitter exposed");
     this.delete.emit(this.expectProp);
  }

  ngOnInit(): void {
  }

}
