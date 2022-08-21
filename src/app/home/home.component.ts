import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @Input() mediaItem: any;
  form: FormGroup;
  
  constructor() { }

 
  onClick(){
    alert('click')
  }
  onSubmit (item) {
    console.log(item );

  }
  get onEmail(){
    return this.form.get('email');

  }

 ngOnInit(){

  this.form = new FormGroup({
    email : new FormControl('', Validators.email),
    password : new FormControl(''),
    category: new FormControl(''),
    checkbox: new FormControl('')
  });
 
  }


}
