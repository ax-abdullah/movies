import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    age: new FormControl(null)
  });
  submitRegister(form:FormGroup):void{
    console.log(form.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
