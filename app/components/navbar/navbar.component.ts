import { Router } from '@angular/router';
import { FirebaseAuthService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: ['a{cursor:pointer;}']
})
export class NavbarComponent implements OnInit {
  name = 'Angular';
  isAuthenticated: boolean;
  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) { }

  ngOnInit() {
    
  }

  isAuth(){
    return this.firebaseAuth.isAuthenticated();
  }
  
  onLogOut() {
    this.firebaseAuth.signOut();
    this.router.navigate(['']);
  }
}
