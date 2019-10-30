import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class movieService {

    constructor(private http:HttpClient) {}

    getQuery( query:string ){
        const url = `http://www.omdbapi.com/?apikey=88c74a6a&${query}&plot=full`
        return this.http.get(url);
    }

    getMovieByName(name:string){
        return this.getQuery(`s=${name}`).pipe(map((data:any) => { return data }));
    }

    getLordOfTheRingsMovies(){
        return this.getQuery(`s=lord of the rings`).pipe(map((data:any) => { return data }));
    }

    getMovieById(imdbID){
        return this.getQuery(`i=${imdbID}`).pipe(map((data:any) => { return data }));
    }

}