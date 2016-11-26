import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent }
]

export const Routing = RouterModule.forRoot(APP_ROUTES);