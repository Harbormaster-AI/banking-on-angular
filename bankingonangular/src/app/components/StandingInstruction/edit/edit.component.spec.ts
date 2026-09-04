
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditStandingInstructionComponent } from './edit.component';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';

describe('EditStandingInstructionComponent', () => {
  let component: EditStandingInstructionComponent;
  let fixture: ComponentFixture<EditStandingInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditStandingInstructionComponent
      ],
      providers: [
        StandingInstructionService,
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

    fixture = TestBed.createComponent(EditStandingInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});