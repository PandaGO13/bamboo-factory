import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAo5mx1jsKIhselpjjMM99096wBKECquOTnFHot6y7LFaxgsk2U_kWkOJ1IulbiGHvyEl193lEK3yqjpq0'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => {
                return data['albums'].items;
              }));
  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=10`)
              .pipe( map( data => data['artists'].items ));

  }

  getArtista(id: string){

    return this.getQuery(`artists/${ id }`);
              //.pipe( map( data => data['artists'].items ));
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( data => data['tracks'] ));
  }

}
