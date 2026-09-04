
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IndexKycProfileComponent } from './index.component';
import { KycProfileService } from '../../../services/KycProfile.service';

describe('IndexKycProfileComponent', () => {
  let component: IndexKycProfileComponent;
  let fixture: ComponentFixture<IndexKycProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexKycProfileComponent
      ],
      providers: [
        KycProfileService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            navigateByUrl: jasmine.createSpy('navigateByUrl')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexKycProfileComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});