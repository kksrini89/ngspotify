import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  imports: [BrowserModule,
    Routing,
    HttpModule,
    FormsModule],
  declarations: [AppComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
