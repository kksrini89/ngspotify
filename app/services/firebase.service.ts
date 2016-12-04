import { User } from './../model/user';
import { Injectable } from '@angular/core';

declare var firebase;

@Injectable()
export class FirebaseAuthService {
    constructor() { }
    signIn(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
        });
    }
    signUp(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
        });
    }
    currentlyLoggedInUser() {
        return firebase.auth().currentUser;
    }

    signOut() {
        firebase.auth().signOut();        
        /*firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });*/
    }
}