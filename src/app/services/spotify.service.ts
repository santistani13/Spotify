import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  token: string  ;
  constructor(private http: HttpClient) {

  }
  
  getToken() {
    return this.http.get('http://localhost:3000/spotify/c2b8784afd0c40d88e54f1b9d505cd32/1a56c2f121004ecc9110ba3644010691')
      .pipe(map((data: token) => {
        this.token = data.access_token;
        console.log(data.access_token)
        return data.access_token;
      }
      ))
  }

  getQuery(query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;
console.log("aaaaaaaa");
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })


    return this.http.get(url, { headers });


  }

getNewReleases() {

  return this.getQuery('browse/new-releases')
    .pipe(map(data => {
      return data['albums'].items;
    }));
}


getArtistas(termino: string){
  return this.getQuery(`search?query=${termino}+&type=artist&offset=0&limit=15`)
    .pipe(map(data => {
      return data['artists'].items;
    }));
}
getArtista(id: string){
  return this.getQuery(`artists/${id}`);
}

getTopTracks(id: string){
  return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map(data => {
      return data['tracks'];
    }))
}




  }
export interface token {
  access_token: string;
}