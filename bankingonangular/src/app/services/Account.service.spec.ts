import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AccountService } from './Account.service';

describe('AccountService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [AccountService] });
	});

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
