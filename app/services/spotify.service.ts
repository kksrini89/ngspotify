import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    searchUrl: string;
    searchArtistUrl: string;
    searchAlbumsUrl: string;
    searchAlbumUrl: string;
    constructor(private http: Http) {
        this.searchUrl = 'https://api.spotify.com/v1/search';
        this.searchArtistUrl = 'https://api.spotify.com/v1/artists/';
        this.searchAlbumsUrl = 'https://api.spotify.com/v1/artists/';
        this.searchAlbumUrl = 'https://api.spotify.com/v1/albums/';
    }
    searchMusic(searchStr: string, type: string = 'artist') {
        return this.http.get(this.searchUrl + '?query=' + searchStr + '&offset=0&limit=20&type=' + type + '&market=US').map(result => result.json());
    }
    getArtist(id: string) {
        return this.http.get(this.searchArtistUrl + id)
            .map(result => result.json());
    }
    getAlbums(artistId: string) {
        return this.http.get(this.searchAlbumsUrl + artistId + '/albums')
            .map(albums => albums.json());
    }
    getAlbum(id: string) {
        return this.http.get(this.searchAlbumUrl + id)
            .map(res => res.json());
    }
}