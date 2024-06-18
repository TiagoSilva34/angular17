import { Component, inject } from '@angular/core';
import { CoinsService } from '../../services/coins.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  coinsService = inject(CoinsService) 

  ngOnInit() {
    this.coinsService.getCoins().subscribe((coin) => console.log(coin))
  }
}
