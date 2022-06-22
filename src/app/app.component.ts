import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-app';

  constructor(private _AuthService: AuthService) {
    // log user out if after a specific amout of time
    // _AuthService.userData.subscribe(() =>{
    //   if(_AuthService.userData.getValue() != null) setTimeout(() => {
    //     _AuthService.logout()
    //   }, 5000);
    // })
  }

}
