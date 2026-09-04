
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateScreeningResultComponent } from './create.component';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';
import { Router } from '@angular/router';

describe('CreateScreeningResultComponent', () => {
  let component: CreateScreeningResultComponent;
  let fixture: ComponentFixture<CreateScreeningResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateScreeningResultComponent
      ],
      providers: [
        ScreeningResultService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateScreeningResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});