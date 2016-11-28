import { User } from './../model/user';
import { Injectable } from '@angular/core';

declare var firebase;

@Injectable()
export class FirebaseService {
    signIn(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    signUp(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    currentlyLoggedInUser() {
        return firebase.auth().currentUser;
    }

    signOut() {
        firebase.auth().signout();
        /*firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });*/
    }
}