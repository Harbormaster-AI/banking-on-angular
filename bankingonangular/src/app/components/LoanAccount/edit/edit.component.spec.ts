
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditLoanAccountComponent } from './edit.component';
import { LoanAccountService } from '../../../services/LoanAccount.service';

describe('EditLoanAccountComponent', () => {
  let component: EditLoanAccountComponent;
  let fixture: ComponentFixture<EditLoanAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditLoanAccountComponent
      ],
      providers: [
        LoanAccountService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});