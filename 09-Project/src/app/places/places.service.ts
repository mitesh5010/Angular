import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

import { Place } from './place.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places', 'Somthing went wrong Available Places! Please try again later.');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places', 'Somthing went wrong Fetching Your Favorite Places! Please try again later.').pipe(tap({
      next: (userPlaces) => this.userPlaces.set(userPlaces),
    }))
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((p)=> p.id === place.id)) { 
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id,
    }).pipe(
      catchError(error => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to store selected place.')
        return throwError(() => new Error())
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((p)=> p.id === place.id)) { 
      this.userPlaces.set(prevPlaces.filter((p) => p.id !== place.id));
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
      .pipe(
        catchError( error => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove selected place.')
        return throwError(() => new Error('Failed to remove selected place.'))
        }
      ))
  }

  private fetchPlaces(url: string , errorMessage: string) {

    return this.httpClient
    .get<{ places: Place[] }>(url)
    .pipe(
      map((resData)=> resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(()=> new Error(errorMessage))
      })
    )
  }
}
