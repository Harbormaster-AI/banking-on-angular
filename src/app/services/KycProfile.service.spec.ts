import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { KycProfileService } from './KycProfile.service';

describe('KycProfileService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [KycProfileService] });
	});

  it('should be created', () => {
    const service: KycProfileService = TestBed.get(KycProfileService);
    expect(service).toBeTruthy();
  });
});
