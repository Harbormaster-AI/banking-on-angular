
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFeeChargeComponent } from './create.component';
import { FeeChargeService } from '../../../services/FeeCharge.service';
import { Router } from '@angular/router';

describe('CreateFeeChargeComponent', () => {
  let component: CreateFeeChargeComponent;
  let fixture: ComponentFixture<CreateFeeChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateFeeChargeComponent
      ],
      providers: [
        FeeChargeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFeeChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});