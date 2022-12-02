import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  public cards!: CardInterface[];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService
      .getAllCards()
      .subscribe(
        (gameCards) =>
          (this.cards = gameCards.filter((card) => card.comingSoon))
      );
  }
}
