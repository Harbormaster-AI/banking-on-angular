
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountStatementComponent } from './create.component';
import { AccountStatementService } from '../../../services/AccountStatement.service';
import { Router } from '@angular/router';

describe('CreateAccountStatementComponent', () => {
  let component: CreateAccountStatementComponent;
  let fixture: ComponentFixture<CreateAccountStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateAccountStatementComponent
      ],
      providers: [
        AccountStatementService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});