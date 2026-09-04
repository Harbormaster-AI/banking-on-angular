
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRepaymentScheduleComponent } from './create.component';
import { RepaymentScheduleService } from '../../../services/RepaymentSchedule.service';
import { Router } from '@angular/router';

describe('CreateRepaymentScheduleComponent', () => {
  let component: CreateRepaymentScheduleComponent;
  let fixture: ComponentFixture<CreateRepaymentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateRepaymentScheduleComponent
      ],
      providers: [
        RepaymentScheduleService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRepaymentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});