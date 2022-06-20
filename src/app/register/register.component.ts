import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.maxLength(8), Validators.minLength(3)]),
    last_name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    age: new FormControl(null)
  });
  submitRegister(form:FormGroup):void{
    console.log(form);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
