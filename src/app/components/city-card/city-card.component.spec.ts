import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityCardComponent } from './city-card.component';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';
import {
  WeatherData,
  WeatherForecast,
} from 'src/app/interfaces/WeaterInterface';
import { Capital } from 'src/app/interfaces/USInterface';
import { HttpClientModule } from '@angular/common/http';
import { fakeWeatherData } from 'src/app/mocks/weatherData';
import { fakeWeatherForecast } from 'src/app/mocks/forecastData';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;
  let weatherService: WeatherService;

  const mockWeatherData: WeatherData = fakeWeatherData;

  const mockWeatherForecast: WeatherForecast = fakeWeatherForecast;

  const mockCapital: Capital = {
    lon: -112.073844,
    lat: 33.448457,
    state: 'Arizona',
    city: 'Phoenix',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityCardComponent],
      providers: [WeatherService],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
  });

  it('should fetch current weather and forecast on ngOnInit', () => {
    spyOn(component, 'getCurrentWeather');
    spyOn(component, 'getForecast');

    fixture.detectChanges();

    expect(component.getCurrentWeather).toHaveBeenCalled();
    expect(component.getForecast).toHaveBeenCalled();
  });

  it('should call WeatherService getCurrentWeather with capital coordinates and assign the result to weatherInfo', () => {
    spyOn(weatherService, 'getCurrentWeather').and.returnValue(
      of(mockWeatherData)
    );

    component.capital = mockCapital;
    component.getCurrentWeather();

    expect(weatherService.getCurrentWeather).toHaveBeenCalledWith(
      mockCapital.lat,
      mockCapital.lon
    );
    expect(component.weatherInfo).toEqual(mockWeatherData);
  });

  it('should call WeatherService getForecast with capital coordinates and assign the result to forecastInfo', () => {
    spyOn(weatherService, 'getForecast').and.returnValue(
      of(mockWeatherForecast)
    );

    component.capital = mockCapital;
    component.getForecast();

    expect(weatherService.getForecast).toHaveBeenCalledWith(
      mockCapital.lat,
      mockCapital.lon
    );
    expect(component.forecastInfo).toEqual(mockWeatherForecast);
  });
});
