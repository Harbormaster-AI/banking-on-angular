import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PaymentCardService } from './PaymentCard.service';

describe('PaymentCardService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [PaymentCardService] });
	});

  it('should be created', () => {
    const service: PaymentCardService = TestBed.get(PaymentCardService);
    expect(service).toBeTruthy();
  });
});
