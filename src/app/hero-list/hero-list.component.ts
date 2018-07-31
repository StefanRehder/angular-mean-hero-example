import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IHero } from '../../../server/models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  protected heroes: IHero[] = [];
  protected statusMessage: string = '';
  public selectedHero: IHero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  public onHeroListElementClicked(elementData: IHero) {
    this.selectedHero = elementData;
  }

  protected onDeleteClicked() {
    this.selectedHero = null;
    this.refreshList();
  }

  protected refreshList() {
    // The Promise way
    this.heroService
      .getHeroes()
      .then((heroes: IHero[]) => {
        this.heroes = heroes;
      })
      .catch((err: HttpErrorResponse) => {
        switch (err.status) {
          case 404: {
              this.statusMessage = 'Not Found';
              break;
          }
          default: {
              this.statusMessage = err.message;
              break;
          }
        }
      }
    );

    // The Observable way (Kept here as an example)
    // this.heroService
    //   .getHeroesObservable()
    //   .subscribe(
    //     (heroes: IHero[]) => {
    //       this.heroes = heroes;
    //     },
    //     (err: HttpErrorResponse) => {
    //         switch (err.status) {
    //             case 404: {
    //                 this.statusMessage = 'Not Found';
    //                 break;
    //             }
    //             default: {
    //                 this.statusMessage = err.message;
    //                 break;
    //             }
    //         }
    //     }
    //   );
  }
}