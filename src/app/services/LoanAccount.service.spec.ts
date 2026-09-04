import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { LoanAccountService } from './LoanAccount.service';

describe('LoanAccountService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [LoanAccountService] });
	});

  it('should be created', () => {
    const service: LoanAccountService = TestBed.get(LoanAccountService);
    expect(service).toBeTruthy();
  });
});
