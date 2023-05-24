import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from './city-card/city-card.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { WeatherExtraInfoComponent } from './weather-extra-info/weather-extra-info.component';
import { ForecastTimelineComponent } from './forecast-timeline/forecast-timeline.component';
import { TemperatureLegendsComponent } from './temperature-legends/temperature-legends.component';

@NgModule({
  declarations: [
    CityCardComponent,
    WrapperComponent,
    WeatherExtraInfoComponent,
    ForecastTimelineComponent,
    TemperatureLegendsComponent,
  ],
  exports: [WrapperComponent, CityCardComponent, TemperatureLegendsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    DividerModule,
    TimelineModule,
  ],
})
export class ComponentsModule {}
