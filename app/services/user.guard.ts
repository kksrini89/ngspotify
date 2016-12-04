import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { FirebaseAuthService } from './firebase.service';

@Injectable()
export class UserGuard implements CanActivate {
    constructor(private firebaseAuth: FirebaseAuthService) { }
    canActivate(activatedRouter: ActivatedRouteSnapshot, currentRoute: RouterStateSnapshot) {
        if (this.firebaseAuth.currentlyLoggedInUser()) {
            return true;
        }
        return false;
    }
}