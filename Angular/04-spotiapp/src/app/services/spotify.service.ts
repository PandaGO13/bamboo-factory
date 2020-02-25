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
      'Authorization': 'Bearer BQCPiJi7kQYABZosCXEMYkyn0XWRMq0pXGjzka4wKVQZ-prsRLDpe7dsU6qP7Kjfzqb7F0KS7EgDdjw788I'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => {
                return data['albums'].items;
              }));
  }

  getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=10`)
              .pipe( map( data => data['artists'].items ));

  }
}
