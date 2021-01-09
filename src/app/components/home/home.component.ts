import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any [] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService ) {
    this.spotify.getToken().subscribe( d => {
      console.log(d);
      this.spotify.getNewReleases()
    .subscribe (( data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    })
    } );
    this.loading = true;
    
    
  }
  ngOnInit(): void {
  }

}
