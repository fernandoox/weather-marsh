import { Component } from '@angular/core';
import { Capital } from '../../interfaces/USInterface';
import { capitalsData } from 'src/app/consts/capitals';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  capitals: Capital[] = capitalsData;
}
