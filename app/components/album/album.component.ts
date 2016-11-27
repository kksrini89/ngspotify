import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from './../../model/artist';
import { Album } from './../../model/album';
import { SpotifyService } from './../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
    // styleUrls: ['artist.styles.css']
})
export class AlbumComponent implements OnInit {
    id: string;
    album: Album[];
    constructor(private spotifyService: SpotifyService, private _route: ActivatedRoute) { }
    ngOnInit() {
        this._route.params.map(data => data['id'])
            .subscribe(id => {                
                this.spotifyService.getAlbum(id)
                    .subscribe(albums => this.album = albums);
            });
    }
}
