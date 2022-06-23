import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
      this._AuthService.userData.subscribe(() =>{
        if(this._AuthService.userData.getValue() != null){
          this.isLoggedIn = true;

        }
        else {
          this.isLoggedIn = false
          // maybe will remove this shit
          this._Router.navigate(['/login'])
        };
        console.log(this.isLoggedIn);
      })

  }
  logout():void{
    this._AuthService.logout()
  }
}
