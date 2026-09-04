import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CollateralService } from './Collateral.service';

describe('CollateralService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [CollateralService] });
	});

  it('should be created', () => {
    const service: CollateralService = TestBed.get(CollateralService);
    expect(service).toBeTruthy();
  });
});
