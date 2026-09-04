import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { LoanPaymentService } from './LoanPayment.service';

describe('LoanPaymentService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [LoanPaymentService] });
	});

  it('should be created', () => {
    const service: LoanPaymentService = TestBed.get(LoanPaymentService);
    expect(service).toBeTruthy();
  });
});
