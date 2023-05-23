import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseApiCapitals } from '../interfaces/USInterface';
@Injectable({
  providedIn: 'root',
})
export class UsCapitalsService {
  capitalsUrl =
    'https://parseapi.back4app.com/classes/Capitals?limit=98&include=state&keys=state,state.name,capital,latitude,longitude,objectId';
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'X-Parse-Application-Id': '6a2NWTwXRlwc1BynCf46kYZG1VeWp170GYjZIeXK',
    'X-Parse-Master-Key': 'WEYdiGWSz0gt91skfDe03wX9yqikQTpiVc9Vn2An',
  });
  // 86ee6195cd94ccba14bc2f08776b1ea9

  getCapitals(): Observable<ResponseApiCapitals> {
    return this.http
      .get<ResponseApiCapitals>(this.capitalsUrl, { headers: this.headers })
      .pipe(
        catchError(
          this.handleError<ResponseApiCapitals>('getCapitals', { results: [] })
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
