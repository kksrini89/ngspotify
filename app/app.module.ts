import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';
import { UserGuard } from './services/user.guard';
import { SpotifyService } from './services/spotify.service';
import { FirebaseAuthService } from './services/firebase.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SignUpComponent } from './components/signUp/signUp.component';
import { SignInComponent } from './components/signIn/signIn.component';

@NgModule({
  imports: [BrowserModule,
    Routing,
    HttpModule,
    FormsModule],
  declarations: [AppComponent,
    SignInComponent,
    SignUpComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent
  ],
  providers: [SpotifyService, FirebaseAuthService, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
