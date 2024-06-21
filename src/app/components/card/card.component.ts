import { Component, inject } from '@angular/core';
import { CoinsService } from '../../services/coins.service';
import { ICoinProps } from '../../../type';
import { NgClass, NgIf} from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgIf, FooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  coinsService = inject(CoinsService)
  coinList: ICoinProps[] = [] 
  showLoader: boolean = false
  updatedDate: string = ""
  errorMessage: string = ""
  // Formula para gerar 3 minutos
  timer: number = 300000

  ngOnInit() {
    this.loadCoinsList()

    this.getCurrentTime()

    interval(this.timer).subscribe(() => this.refreshCoinsService())
  }

  loadCoinsList() {
    this.coinsService.fetchCoins().subscribe({
      next: (response) => {
        this.coinList = Object.values(response).map(item => {
          item.bid = item.bid.slice(0, 4)
  
          if (item.name) {
            let position = item.name.indexOf("/")
            item.name = item.name.slice(0, position)
          }      
  
          return item
        })
      },
      error: ({error}) => {
        this.errorMessage = error.message
      }
    })
  }  

  refreshCoin(coin: ICoinProps) {
    console.log(coin)
  }

  getCurrentTime() {
    // Pega a hora atual do windows
    let date = new Date()
    let hour = date.getHours()
    let minute =date.getMinutes()
    let second = date.getSeconds()
    this.updatedDate = `${hour}:${minute}:${second}`
  }

  refreshCoinsService() {
    this.getCurrentTime()

    this.showLoader = true
    this.loadCoinsList() 

    // Simula o functionando do loader de carregamento de preço
    setTimeout(() => {
      this.showLoader = false
    }, 1000)
  }
}