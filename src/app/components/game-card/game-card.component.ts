import { Component, Input } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input() card!: CardInterface;
}
