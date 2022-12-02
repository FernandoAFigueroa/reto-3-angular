import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card/card.service';
@Component({
  selector: 'app-downloaded',
  templateUrl: './downloaded.component.html',
  styleUrls: ['./downloaded.component.css'],
})
export class DownloadedComponent implements OnInit {
  public cards!: CardInterface[];
  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.cardService
      .getAllCards()
      .subscribe(
        (gameCards) =>
          (this.cards = gameCards.sort((a, b) => b.downloads - a.downloads))
      );
  }
}
