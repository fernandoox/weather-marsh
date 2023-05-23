import { Component } from '@angular/core';
import { UsCapitalsService } from '../../services/us-capitals.service';
import { Capital } from '../../interfaces/USInterface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  capitals: Capital[] = [];
  constructor(private service: UsCapitalsService) {}

  ngOnInit(): void {
    this.getCapitals();
  }

  getCapitals(): void {
    this.service
      .getCapitals()
      .subscribe(({ results }) => (this.capitals = results));
  }
}
