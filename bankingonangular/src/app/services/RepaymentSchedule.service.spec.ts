import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RepaymentScheduleService } from './RepaymentSchedule.service';

describe('RepaymentScheduleService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [RepaymentScheduleService] });
	});

  it('should be created', () => {
    const service: RepaymentScheduleService = TestBed.get(RepaymentScheduleService);
    expect(service).toBeTruthy();
  });
});
