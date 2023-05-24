import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastInfoComponent } from './forecast-info/forecast-info.component';
import { CityCardComponent } from './city-card/city-card.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [CityCardComponent, WrapperComponent, ForecastInfoComponent],
  exports: [WrapperComponent, CityCardComponent, ForecastInfoComponent],
  imports: [CommonModule, ButtonModule, CardModule, AccordionModule],
})
export class ComponentsModule {}
