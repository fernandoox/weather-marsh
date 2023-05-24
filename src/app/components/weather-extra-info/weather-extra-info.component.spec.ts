import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherExtraInfoComponent } from './weather-extra-info.component';
import { fakeWeatherData } from 'src/app/mocks/weatherData';

describe('WeatherExtraInfoComponent', () => {
  let component: WeatherExtraInfoComponent;
  let fixture: ComponentFixture<WeatherExtraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherExtraInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherExtraInfoComponent);
    component = fixture.componentInstance;
  });

  it('should display low and high temperatures', () => {
    component.weatherInfo = fakeWeatherData;

    fixture.detectChanges();

    const lowHighElement =
      fixture.nativeElement.querySelector('.weather-more-info');
    expect(lowHighElement.textContent).toContain('10°C / 20°C');
  });

  it('should display humidity', () => {
    component.weatherInfo = fakeWeatherData;

    fixture.detectChanges();

    const humidityElement =
      fixture.nativeElement.querySelector('.weather-more-info');
    expect(humidityElement.textContent).toContain('80%');
  });

  it('should display feels like temperature', () => {
    component.weatherInfo = fakeWeatherData;

    fixture.detectChanges();

    const feelsLikeElement =
      fixture.nativeElement.querySelector('.weather-more-info');
    expect(feelsLikeElement.textContent).toContain('15°C');
  });
});
