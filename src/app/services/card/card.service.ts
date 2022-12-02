import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CARDS } from 'src/app/mockdata';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  public cards: CardInterface[] = CARDS;
  constructor() {}
  getAllCards(): Observable<CardInterface[]> {
    const gameCards = of(this.cards);
    return gameCards;
  }

  addOne(card: CardInterface): void {
    const newGameCard: CardInterface = {
      title: card.title,
      description: card.description,
      releaseDate: card.releaseDate,
      imageUrl: '../../../assets/images/card_figure.jpeg',
      rating: card.rating,
      downloads: card.downloads,
      comingSoon: card.comingSoon,
    };
    this.cards = [...this.cards, newGameCard];
  }
}
