import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBbG3KzCf3wOUUHHtTIgtM98KL_zQWJ-vIi4oEyuXPgXWyqRJjtpZqYr8z6thumP7-Hdbj42e73yvp4514'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe(data => {
        console.log(data);
      });

  }
}
