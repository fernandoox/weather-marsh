import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastInfoComponent } from './forecast-info.component';

describe('ForecastInfoComponent', () => {
  let component: ForecastInfoComponent;
  let fixture: ComponentFixture<ForecastInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastInfoComponent]
    });
    fixture = TestBed.createComponent(ForecastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
