import { Component, Input } from '@angular/core';
import { IHero } from '../../../server/models/hero';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Input() public selectedHero: IHero;

  constructor() { }
}
