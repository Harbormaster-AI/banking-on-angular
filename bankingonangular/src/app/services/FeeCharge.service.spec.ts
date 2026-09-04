import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FeeChargeService } from './FeeCharge.service';

describe('FeeChargeService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [FeeChargeService] });
	});

  it('should be created', () => {
    const service: FeeChargeService = TestBed.get(FeeChargeService);
    expect(service).toBeTruthy();
  });
});
