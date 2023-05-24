import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureLegendsComponent } from './temperature-legends.component';

describe('TemperatureLegendsComponent', () => {
  let component: TemperatureLegendsComponent;
  let fixture: ComponentFixture<TemperatureLegendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureLegendsComponent]
    });
    fixture = TestBed.createComponent(TemperatureLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
