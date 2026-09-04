
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexIdentityDocumentComponent } from './index.component';
import { IdentityDocumentService } from '../../../services/IdentityDocument.service';

describe('IndexIdentityDocumentComponent', () => {
  let component: IndexIdentityDocumentComponent;
  let fixture: ComponentFixture<IndexIdentityDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexIdentityDocumentComponent
      ],
      providers: [
        IdentityDocumentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexIdentityDocumentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});