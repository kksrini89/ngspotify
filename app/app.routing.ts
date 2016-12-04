import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from './services/user.guard';
import { SignUpComponent } from './components/signUp/signUp.component';
import { SignInComponent } from './components/signIn/signIn.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const APP_ROUTES: Routes = [
    { path: '', component: SignInComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'search', component: SearchComponent, canActivate: [UserGuard] },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'about', component: AboutComponent }
]

export const Routing = RouterModule.forRoot(APP_ROUTES);