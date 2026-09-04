
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateLoanAccountComponent } from './create.component';
import { LoanAccountService } from '../../../services/LoanAccount.service';
import { Router } from '@angular/router';

describe('CreateLoanAccountComponent', () => {
  let component: CreateLoanAccountComponent;
  let fixture: ComponentFixture<CreateLoanAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateLoanAccountComponent
      ],
      providers: [
        LoanAccountService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLoanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});