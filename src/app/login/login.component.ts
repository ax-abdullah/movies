import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:any = '';
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }
  submitLogin(form:FormGroup){
    this._AuthService.login(form.value).subscribe((response)=>{
      console.log(response);
      this.error = response;

      // using local storage to store user data
      if(!(this.error.message == 'success')) return;
      localStorage.setItem('userData', response.token);
      this._Router.navigate(['/home']);
      this._AuthService.setUserData()
  })
  }
}
