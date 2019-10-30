import { Component} from '@angular/core';
import { movieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie:any;

  constructor(private router:ActivatedRoute, private _movieSerive:movieService) {
    this.router.params.subscribe( params => {
        this._movieSerive.getMovieById(params['imdbID']).subscribe( (data:any) => {
          this.movie = data;
          console.log(this.movie);
        });
    });
  }

}
