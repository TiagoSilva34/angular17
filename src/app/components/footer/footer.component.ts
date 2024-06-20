import { Component, computed, input } from '@angular/core';
import { ICoinProps } from '../../../type';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  coin = input<ICoinProps>()
  pctChange = computed(() => this.coin()?.pctChange)
  updatedDate = input<any>()
  
  ngOnInit() {
    console.log(this.coin.name)
  }
}
