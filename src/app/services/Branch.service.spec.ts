import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { BranchService } from './Branch.service';

describe('BranchService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [BranchService] });
	});

  it('should be created', () => {
    const service: BranchService = TestBed.get(BranchService);
    expect(service).toBeTruthy();
  });
});
