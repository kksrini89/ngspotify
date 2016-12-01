import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './../../model/user';
import { FirebaseAuthService } from './../../services/firebase.service';

@Component({
moduleId:'module.id',
    selector: 'signUp',
    templateUrl: 'signUp.component.html'
})
export class SignUpComponent {
    userDetails = {
        email: '',
        password: ''
    };
    constructor(private firebaseAuthService: FirebaseAuthService) { }
    onSignUp(form: NgForm) {
        this.firebaseAuthService.signUp(this.userDetails);
    }
}
