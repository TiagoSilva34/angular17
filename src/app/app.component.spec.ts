import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoinsService } from './services/coins.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CoinsService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
