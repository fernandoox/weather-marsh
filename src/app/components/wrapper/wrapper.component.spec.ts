import { ComponentFixture, TestBed } from '@angular/core/testing';

import { capitalsData } from 'src/app/consts/capitals';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { CityCardComponent } from '../city-card/city-card.component';
import { Capital } from 'src/app/interfaces/USInterface';
import { HttpClientModule } from '@angular/common/http';

describe('WrapperComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [WrapperComponent, CityCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the correct capitals data', () => {
    const expectedCapitals: Capital[] = capitalsData;
    expect(component.capitals).toEqual(expectedCapitals);
  });
});
