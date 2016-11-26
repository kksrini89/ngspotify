import { Artist } from './../../model/artist';
// import { Album } from './../../model/album';
import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id, //For relative path 
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.style.css']
})
export class SearchComponent {
    name = 'Angular';
    searchString: string;
    searchResults: Artist[];
    constructor(private spotifyService: SpotifyService) { }
    searchMusic() {
        this.spotifyService.searchMusic(this.searchString)
            .subscribe(result => this.searchResults = result.artists.items);
    }
}
