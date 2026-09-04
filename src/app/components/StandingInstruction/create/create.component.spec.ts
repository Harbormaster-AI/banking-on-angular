
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateStandingInstructionComponent } from './create.component';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';
import { Router } from '@angular/router';

describe('CreateStandingInstructionComponent', () => {
  let component: CreateStandingInstructionComponent;
  let fixture: ComponentFixture<CreateStandingInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateStandingInstructionComponent
      ],
      providers: [
        StandingInstructionService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStandingInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});