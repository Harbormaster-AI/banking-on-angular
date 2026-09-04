
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexScreeningResultComponent } from './index.component';
import { ScreeningResultService } from '../../../services/ScreeningResult.service';

describe('IndexScreeningResultComponent', () => {
  let component: IndexScreeningResultComponent;
  let fixture: ComponentFixture<IndexScreeningResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexScreeningResultComponent
      ],
      providers: [
        ScreeningResultService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexScreeningResultComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});