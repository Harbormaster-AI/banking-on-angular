import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FundsTransferService } from './FundsTransfer.service';

describe('FundsTransferService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [FundsTransferService] });
	});

  it('should be created', () => {
    const service: FundsTransferService = TestBed.get(FundsTransferService);
    expect(service).toBeTruthy();
  });
});
