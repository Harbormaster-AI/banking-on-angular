import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DisputeService } from './Dispute.service';

describe('DisputeService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [DisputeService] });
	});

  it('should be created', () => {
    const service: DisputeService = TestBed.get(DisputeService);
    expect(service).toBeTruthy();
  });
});
