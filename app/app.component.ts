import { Component } from '@angular/core';

import { UserGuard } from './services/user.guard';
import { FirebaseAuthService } from './services/firebase.service';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  //providers: [SpotifyService]
})
export class AppComponent { name = 'Angular'; }
