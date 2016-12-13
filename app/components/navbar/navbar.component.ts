import { FirebaseAuthService } from './../../services/firebase.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: ['a{ cursor : pointer}']
})
export class NavbarComponent {
  name = 'Angular';
  constructor(private firebaseService: FirebaseAuthService) { }
  onLogOut() {
    this.firebaseService.signOut();
  }
}
