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
      'Authorization': 'Bearer BQCSriJW2Xk6nl2DO07BQ3GS5k0K6CimVOY7y85T71juqYm0rkUtHjPAGAezzCFMGlyPNnz5BTrKwsy-9y8'
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

}
