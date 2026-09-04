import { TestBed } from '@angular/core/testing';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IdentityDocumentService } from './IdentityDocument.service';

describe('IdentityDocumentService', () => {
  	beforeEach(() => {
	  TestBed.configureTestingModule({ imports: [HttpClient, FormGroup, FormBuilder, Validators], providers: [IdentityDocumentService] });
	});

  it('should be created', () => {
    const service: IdentityDocumentService = TestBed.get(IdentityDocumentService);
    expect(service).toBeTruthy();
  });
});
