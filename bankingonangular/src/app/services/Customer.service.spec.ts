import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CustomerService } from './Customer.service';

describe('CustomerService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [CustomerService] });
	});

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
});
