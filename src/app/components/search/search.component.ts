import { Component } from '@angular/core';
import { movieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movies:any[] = [];
  mostrarResultados:boolean = false;
  loading:boolean;

  constructor(private _movieService:movieService, private router:Router) { }

  Buscar(termino:string) {
    this.loading = true;
    this._movieService.getMovieByName(termino).subscribe( (data:any) => {
      console.log(data.Search);
      this.movies = data.Search;
      this.mostrarResultados = true;
      this.loading = false;
    });
  }

  detalleItem(movie:any){
    this.router.navigate(['/movie', movie.imdbID]);
  }

}
