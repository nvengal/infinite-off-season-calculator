import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateLogin(user)) {
    this.flashMessage.show('Please fill out all fields', {cssClass:'alert-danger text-center', timeout:3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('New User Creation Successful', {cssClass:'alert-success text-center', timeout:3000});
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show(data.msg, {cssClass:'alert-danger text-center', timeout:3000});
        this.router.navigate(['/login']);
      }
    });
  }

}
