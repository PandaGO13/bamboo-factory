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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPiJi7kQYABZosCXEMYkyn0XWRMq0pXGjzka4wKVQZ-prsRLDpe7dsU6qP7Kjfzqb7F0KS7EgDdjw788I'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }

  getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPiJi7kQYABZosCXEMYkyn0XWRMq0pXGjzka4wKVQZ-prsRLDpe7dsU6qP7Kjfzqb7F0KS7EgDdjw788I'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=10`, { headers })
      .pipe( map( data => data['artists'].items ));

  }
}
