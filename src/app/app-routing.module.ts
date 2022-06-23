import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'gallery', canActivate: [AuthGuard], component: GalleryComponent},
  {path: 'details', canActivate: [AuthGuard], component: MovieDetailsComponent},
  {path: 'movies', canActivate: [AuthGuard], component: MoviesComponent},
  {path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', canActivate: [AuthGuard], component: AboutComponent},
  {path: 'tv', canActivate: [AuthGuard], component: TvComponent},
  {path: 'people', canActivate: [AuthGuard], component: PeopleComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
