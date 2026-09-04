
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexCollateralComponent } from './index.component';
import { CollateralService } from '../../../services/Collateral.service';

describe('IndexCollateralComponent', () => {
  let component: IndexCollateralComponent;
  let fixture: ComponentFixture<IndexCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexCollateralComponent
      ],
      providers: [
        CollateralService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexCollateralComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});