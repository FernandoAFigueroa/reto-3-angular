import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card/card.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  public cards!: CardInterface[];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService
      .getAllCards()
      .subscribe((gameCards) => this.getPopularCards(gameCards));
  }
  getPopularCards(gameCards: CardInterface[]): void {
    this.cards = gameCards.sort(this.compareRating);
  }
  compareRating(a: CardInterface, b: CardInterface): number {
    return b.rating - a.rating;
  }
}
