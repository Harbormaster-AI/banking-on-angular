import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AccountStatementService } from './AccountStatement.service';

describe('AccountStatementService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [AccountStatementService] });
	});

  it('should be created', () => {
    const service: AccountStatementService = TestBed.get(AccountStatementService);
    expect(service).toBeTruthy();
  });
});
