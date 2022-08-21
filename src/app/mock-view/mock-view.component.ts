import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-mock-view',
  templateUrl: './mock-view.component.html',
  styleUrls: ['./mock-view.component.css']
})
export class MockViewComponent implements OnInit {
  items: Array<Item>;
  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
      this.onGetData();
   
  }
 onGetData(){
   this.mockDataService.getItems()
   .subscribe(
     data => {
       this.items = data;
       console.log (data);
     }
   )
      
    }

}
