import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-frete-rapido';

  // Adiciona o scroll dinamicamente 
  ngDoCheck() {
    window.addEventListener("scroll", function(){
      let header = this.document.getElementById("app-header") as HTMLElement

      if(window.scrollY > 0) {
          header.style.position = "fixed"
          header.style.inset = "0"
          header.style.zIndex = "10"
       } else {
          header.style.position = ""
          header.style.inset = ""
          header.style.zIndex = ""
      }
    })
  }
}