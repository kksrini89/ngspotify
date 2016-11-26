import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent {
    name = 'Angular';
    searchString: string;
    constructor(private spotifyService: SpotifyService) { }
    searchMusic() {
        //console.log(this.searchString);
        this.spotifyService.searchMusic(this.searchString)
            .subscribe(result => console.log(result));
    }
}
