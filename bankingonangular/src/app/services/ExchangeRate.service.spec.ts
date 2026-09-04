import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ExchangeRateService } from './ExchangeRate.service';

describe('ExchangeRateService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [ExchangeRateService] });
	});

  it('should be created', () => {
    const service: ExchangeRateService = TestBed.get(ExchangeRateService);
    expect(service).toBeTruthy();
  });
});
