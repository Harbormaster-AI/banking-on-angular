
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditRiskAssessmentComponent } from './edit.component';
import { RiskAssessmentService } from '../../../services/RiskAssessment.service';

describe('EditRiskAssessmentComponent', () => {
  let component: EditRiskAssessmentComponent;
  let fixture: ComponentFixture<EditRiskAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditRiskAssessmentComponent
      ],
      providers: [
        RiskAssessmentService,
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

    fixture = TestBed.createComponent(EditRiskAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});