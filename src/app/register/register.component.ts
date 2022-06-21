import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null, [ Validators.minLength(3), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(16)])
  });
  submitRegister(form:FormGroup):void{
    console.log(form);
    console.log(form.value)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
