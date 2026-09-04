import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ATMService } from './ATM.service';

describe('ATMService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [ATMService] });
	});

  it('should be created', () => {
    const service: ATMService = TestBed.get(ATMService);
    expect(service).toBeTruthy();
  });
});
