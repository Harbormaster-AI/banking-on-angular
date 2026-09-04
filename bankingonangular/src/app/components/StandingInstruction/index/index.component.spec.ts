
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexStandingInstructionComponent } from './index.component';
import { StandingInstructionService } from '../../../services/StandingInstruction.service';

describe('IndexStandingInstructionComponent', () => {
  let component: IndexStandingInstructionComponent;
  let fixture: ComponentFixture<IndexStandingInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexStandingInstructionComponent
      ],
      providers: [
        StandingInstructionService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexStandingInstructionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});