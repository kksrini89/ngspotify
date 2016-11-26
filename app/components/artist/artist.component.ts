import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from './../../model/artist';
import { Album } from './../../model/album';
import { SpotifyService } from './../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.styles.css']
})
export class ArtistComponent implements OnInit {
    id: string;
    albums: Album[];
    artists: Artist[];
    constructor(private spotifyService: SpotifyService, private _route: ActivatedRoute) { }
    ngOnInit() {
        this._route.params.map(data => data['id'])
            .subscribe(id => {
                this.spotifyService.getArtist(id)
                    .subscribe(result => this.artists = result);
            });
    }
}
