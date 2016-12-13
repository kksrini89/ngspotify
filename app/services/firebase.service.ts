import { Router } from '@angular/router';
import { User } from './../model/user';
import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class FirebaseAuthService {
    constructor(private router: Router) { }
    signIn(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error: any) {
            console.log(error);
        });
    }
    signUp(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error: any) {
            console.log(error);
        });
    }
    currentlyLoggedInUser() {
        return firebase.auth().currentUser;
    }

    signOut() {
        firebase.auth().signOut();
        this.router.navigate(['']);
        /*firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });*/
    }
}