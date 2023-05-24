import { Component, Input } from '@angular/core';
import { WeatherForecast } from 'src/app/interfaces/WeaterInterface';

@Component({
  selector: 'app-forecast-timeline',
  templateUrl: './forecast-timeline.component.html',
  styleUrls: ['./forecast-timeline.component.scss'],
})
export class ForecastTimelineComponent {
  @Input() forecastInfo!: WeatherForecast;
}
