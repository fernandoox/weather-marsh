import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/interfaces/WeaterInterface';

@Component({
  selector: 'app-weather-extra-info',
  templateUrl: './weather-extra-info.component.html',
  styleUrls: ['./weather-extra-info.component.scss'],
})
export class WeatherExtraInfoComponent {
  @Input() weatherInfo!: WeatherData;
}
