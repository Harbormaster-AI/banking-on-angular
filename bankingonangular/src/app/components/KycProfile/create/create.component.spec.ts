
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateKycProfileComponent } from './create.component';
import { KycProfileService } from '../../../services/KycProfile.service';
import { Router } from '@angular/router';

describe('CreateKycProfileComponent', () => {
  let component: CreateKycProfileComponent;
  let fixture: ComponentFixture<CreateKycProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateKycProfileComponent
      ],
      providers: [
        KycProfileService,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateKycProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});