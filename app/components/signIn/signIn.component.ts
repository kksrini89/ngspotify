import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './../../model/user';
import { FirebaseAuthService } from './../../services/firebase.service';

@Component({
moduleId:'module.id',
  selector: 'signIn',
  templateUrl: 'signIn.component.html'
})
export class SignInComponent {
  userDetails = {
    email: '',
    password: ''
  };
  constructor(private firebaseAuthService: FirebaseAuthService,
    private router: Router) { }
  onSignIn(form: NgForm) {
    this.firebaseAuthService.signIn(this.userDetails);
    this.router.navigate(['/search']);
  }
}
