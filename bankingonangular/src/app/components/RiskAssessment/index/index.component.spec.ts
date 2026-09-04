
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexRiskAssessmentComponent } from './index.component';
import { RiskAssessmentService } from '../../../services/RiskAssessment.service';

describe('IndexRiskAssessmentComponent', () => {
  let component: IndexRiskAssessmentComponent;
  let fixture: ComponentFixture<IndexRiskAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexRiskAssessmentComponent
      ],
      providers: [
        RiskAssessmentService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexRiskAssessmentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});