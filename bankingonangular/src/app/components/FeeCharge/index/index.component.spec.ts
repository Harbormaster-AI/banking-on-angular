
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexFeeChargeComponent } from './index.component';
import { FeeChargeService } from '../../../services/FeeCharge.service';

describe('IndexFeeChargeComponent', () => {
  let component: IndexFeeChargeComponent;
  let fixture: ComponentFixture<IndexFeeChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexFeeChargeComponent
      ],
      providers: [
        FeeChargeService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexFeeChargeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});