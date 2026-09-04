import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ExternalAccountService } from './ExternalAccount.service';

describe('ExternalAccountService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [ExternalAccountService] });
	});

  it('should be created', () => {
    const service: ExternalAccountService = TestBed.get(ExternalAccountService);
    expect(service).toBeTruthy();
  });
});
