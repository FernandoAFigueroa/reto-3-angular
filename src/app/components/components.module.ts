import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [NavBarComponent, GameCardComponent],
  exports: [NavBarComponent, GameCardComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
