
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRiskAssessmentComponent } from './create.component';
import { RiskAssessmentService } from '../../../services/RiskAssessment.service';
import { Router } from '@angular/router';

describe('CreateRiskAssessmentComponent', () => {
  let component: CreateRiskAssessmentComponent;
  let fixture: ComponentFixture<CreateRiskAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateRiskAssessmentComponent
      ],
      providers: [
        RiskAssessmentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRiskAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});