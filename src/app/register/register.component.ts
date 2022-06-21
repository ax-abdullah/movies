import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:any = '';
  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null, [ Validators.minLength(3), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(16)])
  });
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  submitRegister(form:FormGroup){
    console.log(form);
    console.log(form.value)
    this._AuthService.register(form.value).subscribe((response)=>{
      if(response.message == 'success') this._Router.navigate(['/login'])
      this.error = response
      console.log( this.error);
    })
  }

  ngOnInit(): void {
  }

}
