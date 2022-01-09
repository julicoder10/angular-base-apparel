import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-section',
  templateUrl: './principal-section.component.html',
  styleUrls: ['./principal-section.component.scss']
})


export class PrincipalSectionComponent implements OnInit {

  myForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required])
  });
  get email() {
    return this.myForm.get('email');
  } 

  constructor() { }

  ngOnInit() {}
  onSubmit(){
    console.log(this.myForm.value);
  }
}

