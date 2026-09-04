import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { StandingInstructionService } from './StandingInstruction.service';

describe('StandingInstructionService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [StandingInstructionService] });
	});

  it('should be created', () => {
    const service: StandingInstructionService = TestBed.get(StandingInstructionService);
    expect(service).toBeTruthy();
  });
});
