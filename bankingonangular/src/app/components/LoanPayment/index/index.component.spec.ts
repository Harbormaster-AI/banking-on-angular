
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexLoanPaymentComponent } from './index.component';
import { LoanPaymentService } from '../../../services/LoanPayment.service';

describe('IndexLoanPaymentComponent', () => {
  let component: IndexLoanPaymentComponent;
  let fixture: ComponentFixture<IndexLoanPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexLoanPaymentComponent
      ],
      providers: [
        LoanPaymentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexLoanPaymentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});