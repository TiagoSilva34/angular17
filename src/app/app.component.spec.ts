import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CardComponent } from './components/card/card.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
  );

  it('The AppComponent should be created', () => {
    const app = AppComponent;
    expect(app).toBeTruthy();
  });

  it('The CardComponent should be created in the AppComponent', () => {
    render(CardComponent);
  });
});
