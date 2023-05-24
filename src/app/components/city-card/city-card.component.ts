import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import {
  WeatherData,
  WeatherForecast,
} from 'src/app/interfaces/WeaterInterface';
import { Capital } from 'src/app/interfaces/USInterface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  @Input() capital!: Capital;
  weatherInfo!: WeatherData;

  forecastInfo!: WeatherForecast;

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeather();
    this.getForecast();
  }

  getCurrentWeather(): void {
    this.service
      .getCurrentWeather(this.capital.lat, this.capital.lon)
      .subscribe((data) => (this.weatherInfo = data));
  }

  getForecast(): void {
    this.service
      .getForecast(this.capital.lat, this.capital.lon)
      .subscribe((results) => (this.forecastInfo = results));
  }
}
