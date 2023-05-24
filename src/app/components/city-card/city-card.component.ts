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

  generateBackground(temperature: number = 10): string {
    if (temperature <= 0) {
      // Freezing, dark blue
      return "rgba(178, 212, 255, 0.7)';";
    } else if (temperature <= 10) {
      // Cold, light blue
      return 'rgba(195, 230, 255, 0.7)';
    } else if (temperature <= 20) {
      // Nice, green
      return 'rgba(181, 237, 181, 0.7)';
    } else if (temperature <= 30) {
      // Warm, yellow
      return 'rgba(255, 255, 204, 0.7)';
    } else {
      // hot, red
      return 'rgba(255, 209, 220, 0.7)';
    }
  }
}
