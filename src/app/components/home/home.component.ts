import { Component } from '@angular/core';
import { movieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  favouriteMovies:any[] = [];
  loading:Boolean;

  constructor(private _movieService:movieService, private router:Router) {

    this.loading = true;

    this._movieService.getLordOfTheRingsMovies()
    .subscribe( (data: any) => {
      console.log(data.Search);
      this.favouriteMovies = data.Search;
      this.loading = false;
    });
  }

  detalleItem(movie:any){
    this.router.navigate(['/movie', movie.imdbID]);
  }

}
