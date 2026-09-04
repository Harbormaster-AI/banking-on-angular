
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLoanPaymentComponent } from './create.component';
import { LoanPaymentService } from '../../../services/LoanPayment.service';
import { Router } from '@angular/router';

describe('CreateLoanPaymentComponent', () => {
  let component: CreateLoanPaymentComponent;
  let fixture: ComponentFixture<CreateLoanPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateLoanPaymentComponent
      ],
      providers: [
        LoanPaymentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});