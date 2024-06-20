import { provideHttpClient } from "@angular/common/http"
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { CoinsService } from "./coins.service"
import { ICoinProps } from "../../type"

describe("Coin service test", () => {
  let service: any = CoinsService
  let controller: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })

    service = TestBed.inject(CoinsService)
    controller = TestBed.inject(HttpTestingController)
  })

  it("should create coin service", () => {
    expect(service).toBeTruthy()
  })

  it("should check the request", () => {
    const testData: any = {name: 'CAD'};

    service.fetchCoins().subscribe((response: ICoinProps) => {
      expect(response).toMatchObject(testData)
    })

    const req = controller.expectOne('https://economia.awesomeapi.com.br/last/CAD,ARS,GBP');

    expect(req.request.method).toBe('GET')

    req.flush(testData)

  })
})