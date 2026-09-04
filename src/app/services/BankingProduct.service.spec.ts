import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BankingProductService } from './BankingProduct.service';

describe('BankingProductService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [BankingProductService] });
	});

  it('should be created', () => {
    const service: BankingProductService = TestBed.get(BankingProductService);
    expect(service).toBeTruthy();
  });
});
