import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ScreeningResultService } from './ScreeningResult.service';

describe('ScreeningResultService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [ScreeningResultService] });
	});

  it('should be created', () => {
    const service: ScreeningResultService = TestBed.get(ScreeningResultService);
    expect(service).toBeTruthy();
  });
});
