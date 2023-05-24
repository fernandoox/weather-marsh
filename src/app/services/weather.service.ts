import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData, WeatherForecast } from '../interfaces/WeaterInterface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(lat: number, lon: number): Observable<WeatherData> {
    return this.http
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.weatherKey}&units=metric`
      )
      .pipe(catchError(this.handleError<WeatherData>('getCurrentWeather', {})));
  }

  getForecast(lat: number, lon: number): Observable<WeatherForecast> {
    return this.http
      .get<WeatherForecast>(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${environment.weatherKey}&units=metric`
      )
      .pipe(catchError(this.handleError<WeatherForecast>('getForecast', {})));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
