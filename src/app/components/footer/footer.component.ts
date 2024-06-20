import { Component, input } from '@angular/core';
import { ICoinProps } from '../../../type';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  coin = input.required<ICoinProps>()
  updatedDate = input.required<any>()
  
  ngOnInit() {
    console.log(this.coin.name)
  }
}
