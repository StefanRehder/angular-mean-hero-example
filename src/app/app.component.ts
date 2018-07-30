import { Component } from '@angular/core';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HttpErrorResponse } from '@angular/common/http';
import { IHero } from '../../server/models/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
}