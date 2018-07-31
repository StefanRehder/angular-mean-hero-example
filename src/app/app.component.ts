import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IHero } from '../../server/models/hero';
import { HeroService } from './hero.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected items: MenuItem[];

  ngOnInit() {
    this.items = [
        {label: 'Hero List', icon: 'fa fa-list', routerLink: ['/heroes']},
        {label: 'Create Hero', icon: 'fa fa-plus-circle', routerLink: ['/create-hero']}
    ];
  }
}