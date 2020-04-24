import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  constructor(private socialAuthService: AuthService, 
    private signinService: LoginService,private Router: Router) { }

  public signinWithGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider)
      .then((userData) => {
        //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        this.sendToRestApiMethod(userData.idToken);
      });
  }
  sendToRestApiMethod(token: string): void {
    // subscribe
    this.signinService
      .checkValidation(
        token
      )
      .subscribe(data => {
        // redirect to the home page
        this.Router.navigate(['search-restaurants']);
      }
      );
  }
}

