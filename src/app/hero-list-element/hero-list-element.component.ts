import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IHero } from '../../../server/models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list-element',
  templateUrl: './hero-list-element.component.html',
  styleUrls: ['./hero-list-element.component.css']
})
export class HeroListElementComponent {
  @Input() public element: IHero;

  @Output() public readonly deleteClicked: EventEmitter<void> =
  new EventEmitter<void>();
  @Output() public readonly heroListElementClicked: EventEmitter<IHero> =
  new EventEmitter<IHero>();

  constructor(private heroService: HeroService) { }

  protected deleteHero(name: string) {
    this.heroService
      .deleteHero(name)
      .then(_ => this.deleteClicked.emit());
  }

  public click() {
    this.heroListElementClicked.emit(this.element);
  }
}
