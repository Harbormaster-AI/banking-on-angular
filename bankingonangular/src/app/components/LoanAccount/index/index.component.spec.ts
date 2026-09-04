
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexLoanAccountComponent } from './index.component';
import { LoanAccountService } from '../../../services/LoanAccount.service';

describe('IndexLoanAccountComponent', () => {
  let component: IndexLoanAccountComponent;
  let fixture: ComponentFixture<IndexLoanAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexLoanAccountComponent
      ],
      providers: [
        LoanAccountService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexLoanAccountComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});