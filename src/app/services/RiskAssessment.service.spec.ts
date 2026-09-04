import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RiskAssessmentService } from './RiskAssessment.service';

describe('RiskAssessmentService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [RiskAssessmentService] });
	});

  it('should be created', () => {
    const service: RiskAssessmentService = TestBed.get(RiskAssessmentService);
    expect(service).toBeTruthy();
  });
});
