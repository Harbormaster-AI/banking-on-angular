import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ThirdPartyProviderService } from './ThirdPartyProvider.service';

describe('ThirdPartyProviderService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [ThirdPartyProviderService] });
	});

  it('should be created', () => {
    const service: ThirdPartyProviderService = TestBed.get(ThirdPartyProviderService);
    expect(service).toBeTruthy();
  });
});
