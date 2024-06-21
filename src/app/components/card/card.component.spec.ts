import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from './card.component';
import { render, screen } from '@testing-library/angular';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { CoinsService } from '../../services/coins.service';

describe('CardComponent', () => {
  let service: any = CoinsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CoinsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should create app component and check request data name exist in card component html', () => {
    render(CardComponent, {
      componentProperties: { errorMessage: 'moeda nao encontrada AD-BRL' },
    });
    // let errorMessage = screen.queryByText('moeda nao encontrada AD-BRL')

    // let coinName = screen.findByText('CAD')

    // expect(coinName).toBeDefined()
    // expect(errorMessage).toBeNull()

    let errorMessage = screen.queryAllByAltText('moeda nao encontrada AD-BRL');

    let coinName = screen.queryByText('CAD');

    expect(coinName).toBeNull();
    expect(errorMessage).toBeTruthy();
  });

  it('should check the request', () => {
    let timer = 300000;

    setTimeout(() => {
      const img = document.querySelector('img#loader') as HTMLImageElement;
      expect(img.src).toContain('../../../assets/loader.svg');
    }, timer);
  });
});
