
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCollateralComponent } from './create.component';
import { CollateralService } from '../../../services/Collateral.service';
import { Router } from '@angular/router';

describe('CreateCollateralComponent', () => {
  let component: CreateCollateralComponent;
  let fixture: ComponentFixture<CreateCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateCollateralComponent
      ],
      providers: [
        CollateralService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCollateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});