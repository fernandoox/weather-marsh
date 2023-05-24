import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { environment } from 'src/environments/environment';
import { WeatherData, WeatherForecast } from '../interfaces/WeaterInterface';
import { of } from 'rxjs';
import { fakeWeatherForecast } from '../mocks/forecastData';
import { fakeWeatherData } from '../mocks/weatherData';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve current weather data', () => {
    const mockLat = 123.45;
    const mockLon = 67.89;
    const mockWeatherData: WeatherData = fakeWeatherData;

    service.getCurrentWeather(mockLat, mockLon).subscribe((data) => {
      expect(data).toEqual(mockWeatherData);
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?lat=${mockLat}&lon=${mockLon}&appid=${environment.weatherKey}&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });

  it('should retrieve weather forecast data', () => {
    const mockLat = 123.45;
    const mockLon = 67.89;
    const mockWeatherForecast: WeatherForecast = fakeWeatherForecast;

    service.getForecast(mockLat, mockLon).subscribe((data) => {
      expect(data).toEqual(mockWeatherForecast);
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${mockLat}&lon=${mockLon}&appid=${environment.weatherKey}&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherForecast);
  });

  it('should handle errors and return default data', () => {
    const mockLat = 123.45;
    const mockLon = 67.89;
    const mockErrorResponse = { status: 404, statusText: 'Not Found' };
    const mockData: any = {};

    service.getCurrentWeather(mockLat, mockLon).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?lat=${mockLat}&lon=${mockLon}&appid=${environment.weatherKey}&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockErrorResponse, { status: 404, statusText: 'Not Found' });
  });
});
