import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

export const ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie/:imdbID', component: MovieComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'search', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]