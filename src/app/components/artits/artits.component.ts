import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artits',
  templateUrl: './artits.component.html',
  styleUrls: ['./artits.component.css']
})
export class ArtitsComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks: any [] = [];

  constructor( private Router: ActivatedRoute,
               private spotify: SpotifyService ) {
    this.loading = true;
    this.Router.params.subscribe( params => {
      this.getAartista( params [ 'id' ] );
      this.getTopTracks( params [ 'id' ] );
    })
   }

   getAartista( id: string ){
     this.spotify.getArtista( id )
     .subscribe( artista => {
       console.log( artista );
       this.artista = artista;
       this.loading = false;
     }) 
   }
   getTopTracks( id: string ) {
     this.spotify.getTopTracks( id )
     .subscribe( topTracks => {
       console.log( topTracks );
       this.topTracks = topTracks;
     })
   }

  ngOnInit(): void {
  }

}
