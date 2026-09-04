import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { FXTradeService } from './FXTrade.service';

describe('FXTradeService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [FXTradeService] });
	});

  it('should be created', () => {
    const service: FXTradeService = TestBed.get(FXTradeService);
    expect(service).toBeTruthy();
  });
});
