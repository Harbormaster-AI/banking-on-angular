
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexRepaymentScheduleComponent } from './index.component';
import { RepaymentScheduleService } from '../../../services/RepaymentSchedule.service';

describe('IndexRepaymentScheduleComponent', () => {
  let component: IndexRepaymentScheduleComponent;
  let fixture: ComponentFixture<IndexRepaymentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexRepaymentScheduleComponent
      ],
      providers: [
        RepaymentScheduleService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexRepaymentScheduleComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});