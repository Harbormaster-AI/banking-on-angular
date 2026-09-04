
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditScreeningResultComponent } from './edit.component';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';

describe('EditScreeningResultComponent', () => {
  let component: EditScreeningResultComponent;
  let fixture: ComponentFixture<EditScreeningResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EditScreeningResultComponent
      ],
      providers: [
        ScreeningResultService,
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

    fixture = TestBed.createComponent(EditScreeningResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});